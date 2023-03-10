import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task-model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() taskItem!:Task;
  
  @Output() deleteTask:EventEmitter<Task>=new EventEmitter();
  @Output() toggleReminder:EventEmitter<Task>=new EventEmitter();
  @Output() editTask:EventEmitter<Task>=new EventEmitter();
  showAddTask:boolean=false;

  constructor(private _router:Router, private _service:TaskService) { }

  ngOnInit(): void {
   
  }

  onDelete(taskItem:Task){
   this.deleteTask.emit(taskItem);
  }

  onToggle(taskItem:Task){
    this.toggleReminder.emit(taskItem);
  }

  onEdit(taskItem:Task){
    this.editTask.emit(taskItem);
  }
}
