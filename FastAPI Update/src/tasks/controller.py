from src.tasks.dtos import TaskSchema
from sqlalchemy.orm import Session
from src.tasks.models import TaskModel
from fastapi import HTTPException

def update_task(body:TaskSchema,task_id:int,db:Session):
     one_task=db.query(TaskModel).get(task_id)
     if not one_task:
        raise HTTPException(404,detail="Task id is incorrect")    
    
     one_task.title = body.title 
     one_task.description=body.description
     one_task.is_completed=body.is_completed

     db.add(one_task)
     db.commit()
     db.refresh(one_task)

     return {"status":"Task Updated Successfully","data":one_task}
