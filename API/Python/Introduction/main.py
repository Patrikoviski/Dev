# todos os comandos do python sao os: print(), input(), len(), range(), type(), str(), int(), float(), list(), dict(), set(), bool(), help(), dir().

# pip install fastapi sqlalchemy passlib[bcrypt] python-jose[cryptography] python-dotenv python-multipart

#  source .venv/Scripts/activate - ativa o ambiente virtual
# uvicorn main:app --reload - RODA O SERVIDOR



# endpoint:
# /ordens

# CRUD - Create, Read, Update, Delete


# Rest APIs
# Get - Read - Ler / Pegar
# Post - Create - Criar / Enviar
# Put / Patch - Update - Atualizar / Modificar
# Delete - Delete - Deletar


from fastapi import FastAPI

app = FastAPI()


from auth_routes import auth_router
from order_routes import order_router

app.include_router(auth_router)
app.include_router(order_router)