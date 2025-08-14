import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private baseUrl  =  'http://localhost:8080/';
  constructor(private http:HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl + '/tasks' );
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<User>(this.baseUrl + 'newTask', task);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + 'deleteTask' + `${id}`);
  }
}
