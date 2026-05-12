
from fastapi import FastAPI
from mockData import products
from dtos import ProductDTO

app=FastAPI()

@app.put("/update_product/{product_id"}
def update_product(product_data:productDTO,product_id:int)

  for index,oneProduct in enumerate(products):
    if oneproduct.get("id")==product_id:
      products[index]=product_data.model_dump()
      return{"status":"product updated sucessfully..","products"product_data}

return{"error":"Product not found for this ID"}
