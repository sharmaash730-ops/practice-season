from fastapi import HTTPException
from src.user.dtos import UserSchema,LoginSchema
from sqlalchemy.orm import Session
from src.user.models import UserModel

def register(body:UserSchema, db:Session):
  is_user = db.query(UserModel).filter(UserModel.username == body.username).first()
  if is_user:
    raise HTTPException(400,detail="Username already Exist..")

  is_user = db.query(UserModel).filter(UserModel.email == body.email).first()
  if is_user:
    raise HTTPException(400,detail="Email address already Exist..")
    
  return{"msg":"Registration Done"}
