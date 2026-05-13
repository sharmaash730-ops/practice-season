
from fastapi import APIRouter,depends
from src.tasks import controller
from src.tasks.dtos import TaskSchema
from src.utils.db import get_db

task routes=APIRouter(prefix="/tasks")

@task_routes.post("/create")
def create_task(body:TaskSchema,db = Depends(get_db)):
    return controller.create_task(body,db)
