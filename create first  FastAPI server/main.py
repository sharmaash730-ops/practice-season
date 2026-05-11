
from fastapi import FastAPI

app=FastAPI()

@app.get("/")
def.home():
  return "welcome to FASTAPI server"

@app.get("/contact")
def.contact():
  return("you can contact us any Time")
