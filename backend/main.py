from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router as auth_router

app = FastAPI(title="Auth API")

# Allow frontend connection (adjust ports as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(auth_router, prefix="/api/v1")
