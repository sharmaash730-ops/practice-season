from src.tasks.dtos import TaskSchema
from sqlalchemy.orm import Session
from src.tasks.models import TaskModel
from fastapi import HTTPException


def get_tasks(db:Session):
    tasks = db.query(TaskModel).all()
    return {"status":"All Tasks","data":tasks}


