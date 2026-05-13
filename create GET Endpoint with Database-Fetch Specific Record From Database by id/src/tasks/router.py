
from fastapi import APIRouter,Depends
from src.tasks import controller
from src.tasks.dtos import TaskSchema
from src.utils.db import get_db

task_routes = APIRouter(prefix="/tasks")

@task_routes.get("/one_task/{task_id}")
def get_one_task(task_id:int,db=Depends(get_db)):
    return controller.get_one_task(task_id,db)

