import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[];
  

  constructor() {
    this.users=[];
   }

   getAll():User[]{
     return this.users;
   }

   get(id:string){
     return this.users.find((c)=>(c.emailId==id));
   }

   add(user:User){
     this.users.push(user);
   }

   update(user:User){
     let index=this.users.findIndex((c)=>(c.emailId===user.emailId));
     if(index>-1){
       this.users[index]=user;
     }
   }

   delete(id:string){
     let index= this.users.findIndex((user)=>(user.emailId===id))
     if(index>-1){
       this.users.splice(index,1);
     }
   }
}
