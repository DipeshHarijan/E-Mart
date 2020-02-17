import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'userList',component:UserListComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'add',component:ItemFormComponent},
  {path:'itemList',component:ItemsListComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
