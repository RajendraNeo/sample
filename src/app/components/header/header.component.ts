import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask:boolean=false;
  constructor(private _service:TaskService) { 
    this._service.onToggle().subscribe((value:boolean)=>{
      this.showAddTask=value
    })
  }

  ngOnInit(): void {
   
  }

  toggleAddTask(){
    this._service.toggleAddTask();
  }
}
