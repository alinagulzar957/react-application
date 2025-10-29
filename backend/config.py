from pydantic_settings import BaseSettings  # Pydantic v2

class Settings(BaseSettings):
    MONGO_URI: str = "mongodb://localhost:27017/react_db"
    JWT_SECRET_KEY: str = "your_secret_here"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

settings = Settings()
