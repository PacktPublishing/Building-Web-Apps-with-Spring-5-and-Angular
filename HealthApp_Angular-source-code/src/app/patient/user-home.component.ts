
import {Component, OnInit} from '@angular/core';
import {RxService} from '../rx/rx.service';
import {Rx} from '../rx/rx';

@Component({
  templateUrl: './user-home.component.html',
})
export class UserHomeComponent implements OnInit {
  rxlist: Rx[];
  errorMessage: string;

  constructor(private rxService: RxService) {}

  ngOnInit(): void {
    this.rxService.getRx()
      .subscribe(rxlist => this.rxlist = rxlist,
        error =>  {
        });
  }
}
