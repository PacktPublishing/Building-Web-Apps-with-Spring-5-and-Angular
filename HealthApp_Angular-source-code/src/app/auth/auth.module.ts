import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AuthComponent } from './auth.component';

import { LoginComponent } from './login.component';
import { UserRegistrationComponent } from './user-registration.component';
import { ForgotPasswordComponent } from './forgot-password.component';

import { AuthService } from './auth.service';

import {  AuthRoutingModule } from './auth-app-routing.module';
import { LogoutComponent } from './logout.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports:      [ CommonModule, FormsModule, AuthRoutingModule ],
  declarations: [ AuthComponent, LoginComponent,
    UserRegistrationComponent, ForgotPasswordComponent, LogoutComponent],
  providers: [ {provide: AuthService, useClass: AuthService}
  ]
})
export class AuthModule { }
