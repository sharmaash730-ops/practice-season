
from fastapi import FastAPI,Request

app=FastAPI()

@app.get("/")
def home():
  return "Request query params"

@app.get("/greet")
def greet_user(request:Request):
  query_params=dict(request.query_params)
  return {
    "greet":"hello {query_params.get("name")},your age is{query_params.get("age")}
  }
