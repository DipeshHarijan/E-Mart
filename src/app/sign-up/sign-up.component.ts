import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private user:User;
  private isNew:boolean;
  private password2: string;

  constructor(
    private userServ:UserService,
    private routeData: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
  }

  verifyPassword():boolean {
    if(this.user.password==''){
      alert("Please enter password")
      return false;
    }
    else if(this.password2==''){
      alert("Re-enter password");
      return false;
    }
    else if(this.user.password!=this.password2){
      alert("Password did not match. Please try again.");
      return false;
    }
    else{
      alert("Account Created")
      return true;
    }
  //    alert("This is verifyPassword");
  }

  save(){
    if(this.verifyPassword()){
      this.userServ.add(this.user);
    }else{
      this.userServ.update(this.user);
    }
    this.router.navigateByUrl("/login");
    //alert("This is save");
  }
}
