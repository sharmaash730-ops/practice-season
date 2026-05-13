
from src.tasks.dtos import TaskSchema
from sqlalchemy.orm import Session
from src.tasks.models import TaskModel
from fastapi import HTTPException

def get_one_task( task_id:int,db:Session):
    one_task=db.query(TaskModel).get(task_id)
    if not one_task:
        raise HTTPException(404,detail="Task id is incorrect")    
    

    return {"status":"Task Fetched Successfully","data":one_task}  

