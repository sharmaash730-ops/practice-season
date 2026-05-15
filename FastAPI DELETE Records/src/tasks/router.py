from fastapi import APIRouter,Depends
from src.tasks import controller
from src.tasks.dtos import TaskSchema
from src.utils.db import get_db

task_routes = APIRouter(prefix="/tasks")

@task_routes.delete("/delete_task/{task_id}")
def delete_task(task_id:int,db = Depends(get_db)):
    return controller.delete_task(task_id,db)
