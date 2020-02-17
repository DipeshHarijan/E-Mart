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

  constructor(
    private userServ:UserService,
    private routeData: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeData.params.subscribe(
      (params)=>{
        let userId= params['eid'];

        if(userId=undefined){
          this.isNew=true;
          this.user=new User();
        }else{
          this.user=this.userServ.get(userId);
          this.isNew=false;
        }
      }
    );
  }

  save(){
    if(this.isNew){
      this.userServ.add(this.user);
    }else{
      this.userServ.update(this.user);
    }
    this.router.navigateByUrl("/userList");
  }

}
