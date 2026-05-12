
from fastapi import FastAPI
from src.utils.db import Base,engine

Base.metadata.create.all(engine)

app=FastAPI(title="This is my Task Managment Applications")
