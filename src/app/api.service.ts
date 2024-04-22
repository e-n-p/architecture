import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dataUrl = "../assets/data.json";
  private userDB = new BehaviorSubject<Array<User>>([]);
  user$ = this.userDB.asObservable();
  testUsers:User[] = [];

  constructor(private http: HttpClient) { 
    this.getApiData();
  }

  private getApiData(): void {
    this.http.get<User[]>(this.dataUrl).pipe(
      map(users => {
        return users;
      })
    ).subscribe((users) => {
      this.userDB.next(users);
      this.testUsers = users; // here as an ordinary container we can do operations inside the service easier and return back a observable after additional logic
    });
  }

  getUsers(): Observable<User[]> {
    return this.user$;
  }

}
