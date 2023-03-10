import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit, OnChanges {
  @Input() editTask!:any;
  @Output() editSubmit= new EventEmitter();
  text:string=""
  day:string=""
  reminder:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.text=this.editTask.text
    this.day=this.editTask.day
    this.reminder=this.editTask.reminder
  }

  submitTask(){
    let editTaskSub={
      id:this.editTask.id,
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.editSubmit.emit(editTaskSub);
  }
}
