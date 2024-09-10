// export class UserService {

//   constructor(private http: HttpClient) {}

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.apiUrl);
//   }

//   // getUser(id: number): Observable<User> {
//   //   return this.http.get<User>(`${this.apiUrl}/${id}`);
//   // }
//   getUser(userId: number): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }

//   addUser(data: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, data);
//   }
//   // addUser(user: User): Observable<User> {
//   //   debugger
//   //   return this.http.post<User>(`${this.apiUrl}/${user.id}`, user);
//   // }

//   updateUser(user: User): Observable<User> {
//     return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
//   }

//   deleteUser(id: number): Observable<void> {debugger
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'assets/users.json';
  private users: User[] = [];
  constructor(private http: HttpClient) {
  }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  addUser(newUser: User): Observable<User[]> {
    debugger
    newUser.userId = this.users.length ? Math.max(...this.users.map(u => u.userId)) + 1 : 1;
    this.users.push(newUser);
    return of(this.users);
  }

  updateUser(updatedUser: User): Observable<User[]> {
    debugger
    const index = this.users.findIndex(u => u.userId === updatedUser.userId);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
    return of(this.users);
  }

  deleteUser(userId: number): Observable<User[]> {
    debugger
    this.users = this.users.filter(u => u.userId !== userId);
    return of(this.users);
  }
}
