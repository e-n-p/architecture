import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  dataUrl = "../assets/data.json";
  private userDB = new BehaviorSubject<Array<User>>([]);
  user$ = this.userDB.asObservable();

  constructor(private http: HttpClient) { 
    this.getApiData();
  }

  private getApiData(): void {
    this.http.get<User[]>(this.dataUrl).subscribe(
      users => {
        this.userDB.next(users);
      },
      error => {
        console.error("bad news: ", error);
      }
    );
  }

  getUsers(): Observable<User[]> {
    return this.user$;
  }

  getAllUsers(): User[]{
    return this.userDB.value;
  }

  getRandomUsers(): User{
    return this.userDB.value[5];
  }



}
