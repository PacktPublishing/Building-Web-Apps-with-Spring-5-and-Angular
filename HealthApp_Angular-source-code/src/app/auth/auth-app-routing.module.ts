import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent }       from './auth.component';
import { LoginComponent } from './login.component';
import { UserRegistrationComponent } from './user-registration.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import {LogoutComponent} from './logout.component';


const authRoutes: Routes = [
  {
    path: 'auth', component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: UserRegistrationComponent,
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
