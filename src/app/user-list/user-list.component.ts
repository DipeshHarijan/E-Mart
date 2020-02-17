import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userServ:UserService) { }

  ngOnInit() {
    this.users=this.userServ.getAll();
  }
delete(userId:string){
  if(confirm(`Are you sure of deleting User#${userId}`)){
    this.userServ.delete(userId);
  }
}
}
