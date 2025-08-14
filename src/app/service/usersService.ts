import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/user' );
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'saveUser', user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + 'deleteUser' + `${id}`);
  }
}
