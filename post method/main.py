
from fastapi import FastAPI
from mockData import products
from dtos import productDTO

app=FastAPI()

@app.post("/create_post")
def create_product(product_data:productDTO):
  product_data=product_data.model_pump()
  products.append(product_data)
  return{"status":"Product Created Sucessfully...","data":products}
