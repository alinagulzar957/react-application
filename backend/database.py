from motor.motor_asyncio import AsyncIOMotorClient
from config import settings  # absolute import

client = AsyncIOMotorClient(settings.MONGO_URI)
db = client.get_default_database()

def get_user_collection():
    return db["users"]
