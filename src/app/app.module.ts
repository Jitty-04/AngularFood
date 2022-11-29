import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRouter:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"order",
    component:OrderComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"signup",
    component:SigninComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    SigninComponent,
    RegisterComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
