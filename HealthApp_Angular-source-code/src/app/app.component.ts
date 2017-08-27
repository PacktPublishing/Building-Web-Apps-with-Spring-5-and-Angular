import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Cookie} from 'ng2-cookies';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  appName = 'HealthApp';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loginStatus =>
      this.isLoggedIn = loginStatus
    );
  }

  myHome() {
    if (this.isLoggedIn) {
      const role = Cookie.get('role');
      if (role === 'ROLE_DOCTOR') {
        this.router.navigate(['rx']);
      } else {
        this.router.navigate(['patient/home']);
      }
    } else {
      this.router.navigate(['/']);
    }
  }

  onLogout() {
    this.authService.logout();
  }
}
