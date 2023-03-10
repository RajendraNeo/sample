import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

import { Task } from 'src/app/task-model';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks:Task[]=[];
  editTask!:any;
  constructor(private _taskService:TaskService) { }

  ngOnInit(): void {
    this._taskService.getTask().subscribe((res:Task[])=>this.tasks=res);
  }

  deleteTask(event:Task){
    this._taskService.deleteTask(event).subscribe((result:Task)=>{
      if(result){
        const data=this.tasks.filter((res:Task)=>res.id!==event.id)
        this.tasks=data;
      }
    })
  };
  onToggle(taskItem:Task){
   taskItem.reminder=!taskItem.reminder;
   this._taskService.updateTask(taskItem).subscribe()
  };

  addTask(data:Task){
    this._taskService.addTask(data).subscribe((res:Task)=>{
      this.tasks.push(res);
    })
  };

  onEditTask(data:Task){
    this.editTask=data;
    console.log("edit",this.editTask)
  }

  onEditSubmit(editTask:any){
    this.tasks=this.tasks.map((item)=>{
      if(editTask.id===item.id){
        console.log(editTask)
        return editTask;
      }
      return item;
    });
    
  }
}


