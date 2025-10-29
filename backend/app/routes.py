from fastapi import APIRouter, HTTPException, Depends, status
from app.schemas import SignupRequest, LoginRequest, TokenResponse, UserResponse
from app.utils import hash_password, verify_password, create_access_token
from database import get_user_collection
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer
from config import settings

router = APIRouter(prefix="/auth", tags=["auth"])
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")

@router.post("/signup", response_model=UserResponse)
async def signup(data: SignupRequest):
    users = get_user_collection()
    existing_user = await users.find_one({"email": data.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    user_doc = {
        "email": data.email,
        "hashed_password": hash_password(data.password)
    }
    await users.insert_one(user_doc)
    return UserResponse(email=data.email)

@router.post("/login", response_model=TokenResponse)
async def login(data: LoginRequest):
    users = get_user_collection()
    user = await users.find_one({"email": data.email})
    if not user or not verify_password(data.password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    access_token = create_access_token({"sub": user["email"]})
    return TokenResponse(access_token=access_token, token_type="bearer")

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    return {"email": email}

@router.get("/me", response_model=UserResponse)
async def read_me(current_user: dict = Depends(get_current_user)):
    return UserResponse(email=current_user["email"])
