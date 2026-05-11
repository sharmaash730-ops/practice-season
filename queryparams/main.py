
from fastapi import FastAPI
from mockData import products

app=FastAPI()

@app.get("/home")
def home():
  return"welcome to our first FastAPi"

@app.get("/products")
def get_products():
  return products

@app.get("/greet")
def greet_user(name:str ,age:int):
  return {
    "error":f"hello{name},Your age is {age}"
  }
