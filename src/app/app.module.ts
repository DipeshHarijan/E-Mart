import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SignUpComponent,
    LoginComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    ItemFormComponent,
    UserListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
