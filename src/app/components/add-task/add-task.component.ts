import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  editId:any;
  text!:string;
  day!:string;
  reminder:boolean=false;
  showAddTask:boolean=false;
  
  @Output() addTask:EventEmitter<any>=new EventEmitter();
  
  constructor(private _service:TaskService) { 
    this._service.onToggle().subscribe((res:boolean)=>{
      this.showAddTask=res;
    });
  }

  ngOnInit(): void {
  }

  submitTask(){
    if(!this.text){
      alert("Please Enter the tasks")
      return
    }

    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    // @todo Emit event
    this.addTask.emit(newTask);

    this.text=""
    this.day=""
    this.reminder=false;
  }
}
