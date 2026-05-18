from src.user.dtos import UserSchema,LoginSchema
from sqlalchemy.orm import Session

def register(body:UserSchema, db:Session):
  print(body)
  return{"msg":"Registration Done"}
