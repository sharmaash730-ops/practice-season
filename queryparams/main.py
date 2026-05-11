
from fastapi import FastAPI

app=FastAPI()

@app.get("/home")
def home():
  return"welcome to our first FastAPi"

@app.get("/greet")
def greet_user(name:str ,age:int):
  return {
    "error":f"hello{name},Your age is {age}"
  }
