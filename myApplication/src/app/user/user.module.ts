import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
console.log("user module callig...")

@NgModule({
  declarations: [
    UserLoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
