from fastapi import APIRouter 

order_router = APIRouter(prefix="/orders", tags=["orders"])

@order_router.get("/")
async def orders():
    """Essa rota é para listar os pedidos."""
    return {"message": "List of orders"}