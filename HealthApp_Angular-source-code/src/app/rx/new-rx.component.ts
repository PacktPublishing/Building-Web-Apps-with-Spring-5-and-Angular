import {Rx, RxStatus} from './rx';
import {Component} from '@angular/core';
import {RxService} from './rx.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './new-rx.component.html'
})
export class NewRxComponent {
  rx: Rx;
  rxStatus: RxStatus;
  alertStyle: string;

  constructor(private rxService: RxService, private router: Router) {
    this.rx = new Rx();
    this.rxStatus = new RxStatus();
    this.alertStyle = '';
  }

  onSubmit() {
    this.rxService.createRx(this.rx)
      .subscribe((rx: Rx) => {
        this.rxStatus.code = 'SUCCESS';
        this.rxStatus.message = 'Prescription is successfully created!';
        this.alertStyle = 'alert alert-success';
      },
      error =>  {
        if (error === 'invalid_token') {
          this.rxStatus.code = 'FAILURE';
          this.rxStatus.message = 'Prescription is not created. You need to login again!';
          this.alertStyle = 'alert alert-danger';
        } else {
          console.error('An error occurred while creating the rx, navigating to login: ', error);
        }
        this.router.navigateByUrl('/auth/login');

      });
  }
}
