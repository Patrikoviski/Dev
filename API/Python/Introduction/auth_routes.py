from fastapi import APIRouter, Depends, HTTPException
from models import Usuario
from dependencies import pegar_sessao
from main import bcrypt_context
from schemas import UsuarioSchema

auth_router = APIRouter(prefix="/auth", tags=["auth"])

@auth_router.get("/")
async def auth():
    """Essa rota é para autenticação."""
    return {"message": "Authentication endpoint", "auth": False}

@auth_router.post("/criar_conta")
async def criar_conta(usuario_schema: UsuarioSchema, session = Depends(pegar_sessao)):
    """Essa rota cria uma nova conta de usuário."""
    usuario = session.query(Usuario).filter(Usuario.email == usuario_schema.email).first()
    if usuario:
        raise HTTPException(status_code=400, detail="Email já cadastrado")
    else:
        senha_criptografada = bcrypt_context.hash(usuario_schema.senha)
        novo_usuario = Usuario(usuario_schema.nome, usuario_schema.email, senha_criptografada, usuario_schema.ativo, usuario_schema.admin)
        session.add(novo_usuario)
        session.commit()
        return {"message": f"usuario criado com sucesso, {usuario_schema.email}"}