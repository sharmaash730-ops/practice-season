
from fastapi import FastAPI
from mockData import products

app=FastAPI()

@app.get("/")
def home():
  return "welcome to First FastAPI"

@app.get("/products")
def get_products():
  return products

##dynamic params
@app.get("/product/{product_id}")
def get_one_Product(product_id:int):

  #if product available with id,return product ,else return error message
  for oneProduct in products:
    if oneProduct.get("id")==product_id:
      return oneProduct
      return {
        "error":"product not found for this id"
      }


  
