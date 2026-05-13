from fastapi import APIRouter,Depends
from src.tasks import controller
from src.tasks.dtos import TaskSchema
from src.utils.db import get_db

task_routes = APIRouter(prefix="/tasks")

@task_routes.put("/update_task/{task_id}")
def update_task(body:TaskSchema,task_id:int,db = Depends(get_db)):
    return controller.update_task(body,task_id,db)
