import {RxService} from './rx.service';
import {Rx} from './rx';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './rx-list.component.html'
})
export class RxListComponent  implements OnInit {

  rxlist: Rx[];
  errorMessage: string;

  constructor(private rxService: RxService, private router: Router) {
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.getRx();
  }

  getRx() {
    this.rxService.getRx()
      .subscribe(rxlist => {
          this.rxlist = rxlist;
          if (this.rxlist.length === 0) {
            this.errorMessage = 'There are no prescriptions you have created so far!';
          }
        },
        error =>  {
          this.router.navigateByUrl('/auth/login');
          console.error('An error occurred in retrieving rx list, navigating to login: ', error);
        });
  }
}
