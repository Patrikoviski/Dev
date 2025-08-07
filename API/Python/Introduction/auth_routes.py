from fastapi import APIRouter

auth_router = APIRouter(prefix="/auth", tags=["auth"])

@auth_router.get("/")
async def auth():
    """Essa rota é para autenticação."""
    return {"message": "Authentication endpoint", "auth": False}