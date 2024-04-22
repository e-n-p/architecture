import { Component } from '@angular/core';
import { User } from '../../../../../models/user';
import { ApiService } from '../../../../../api.service';
import { Observer } from 'rxjs';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  requestedUser!:User;
  requestedUserID:number | null = null;

  constructor(private serivce: ApiService, private route: ActivatedRoute){
  }
  
  ngOnInit(): void {
    this.serivce.getUsers().subscribe(this.usersObserver);
  }

  usersObserver: Observer<User[]> = {
    next: users => {
      this.route.paramMap.subscribe( paramMap => {
        this.requestedUserID = Number(paramMap.get('id'));
      })
      if (this.requestedUserID){
        this.requestedUser = users[this.requestedUserID];
      } else {
        this.requestedUser = users[0];
      }

      console.log(users);
    },
    error: error => {
      console.error('Error fetching users:', error);
    },
    complete: function (): void {}
  };


}
