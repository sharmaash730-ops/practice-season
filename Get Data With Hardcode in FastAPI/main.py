
from fastapi import FastAPI

app=FastAPI()

@app.get("/")
def.home():
  return"welcome to FASTAPI"

@app.get("/products")
def get_products():
  return products
