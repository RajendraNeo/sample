import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Task } from '../task-model';
 
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private showAddtask:boolean=false;
  private subject=new Subject<any>();
  baseUrl="http://localhost:3000/tasks";
  
  constructor(private http:HttpClient) { }
   
  toggleAddTask():void{
    this.showAddtask=!this.showAddtask;
    this.subject.next(this.showAddtask);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

  getTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl);
  }
  getTaskById(id:number):Observable<Task[]>{
    return this.http.get<Task[]>(`http://localhost:3000/tasks/${id}`);
  }
  addTask(data:Task):Observable<Task>{
    let url=`${this.baseUrl}`;
    return this.http.post<Task>(url,data, httpOptions);
  }
  deleteTask(task:Task):Observable<Task>{
    let url=`${this.baseUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTask(task:Task):Observable<Task>{
    let url=`${this.baseUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
  }
}
