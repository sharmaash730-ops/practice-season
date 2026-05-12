
from fastapi import FastAPI
from mockData import products
from dtos import ProductDTO

app=FastAPI()

@app.delete("/delete_product/{product_id}")
def delete_product(product_id:int):
  for index,oneProduct in enumerate(products):
    if oneProduct.get("id")==product_id:
      delete_product=products.pop(index)
      return{"status":"Product Deleted Successfully...","product"deleted_product}

return{"error":"Product not found of this id"}
