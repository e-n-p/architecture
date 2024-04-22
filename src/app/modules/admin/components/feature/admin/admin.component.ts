import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../../../../api.service';
import { User } from '../../../../../models/user';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  allUsers:Array<User> = [];

  constructor(private serivce: ApiService){
  }
  
  ngOnInit(): void {
    this.serivce.getUsers().subscribe(this.usersObserver);
  }

  usersObserver: Observer<User[]> = {
    next: users => {
      this.allUsers = users;
      console.log(users);
    },
    error: error => {
      console.error('Error fetching users:', error);
    },
    complete: function (): void {}
  };
}
