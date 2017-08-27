import {Component} from '@angular/core';

import {Login, LoginStatus} from './login';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  alertStyle = '';
  loginStatus = new LoginStatus('', '');
  model = new Login('', '');

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin() {
    this.initLogin();
    this.authService.login(this.model)
      .subscribe((status: LoginStatus) => {
        this.loginStatus = status;
        if (status.code === 'FAILURE') {
          this.alertStyle = 'alert alert-danger';
        }
      });
  }

  onLogout() {
    this.authService.logout();
  }

  private initLogin() {
    this.alertStyle = '';
    this.loginStatus.code = '';
    this.loginStatus.message = '';
  }
}
