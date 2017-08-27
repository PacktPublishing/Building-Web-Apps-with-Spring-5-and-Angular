import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {Doctor} from './doctor';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'doctor-list',
  templateUrl: './doctor-list.component.html'
})
export class DoctorListComponent  implements OnInit {

  doctors: Doctor[];
  doctorsCount: number;
  errorMessage: string;

  constructor (private doctorService: DoctorService,
               private router: Router,
               private route: ActivatedRoute) {
    this.doctors = new Array();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.doctorService.getDoctorsBySpeciality(params.get('speciality'))
        .subscribe(doctors => this.doctors = doctors,
              error =>  {
                this.router.navigateByUrl('/auth/login');
                console.error('An error occurred in retrieving doctors list, navigating to login: ', error);
              }));
  }

  onSelect(speciality: string) {
    this.router.navigateByUrl('doctor/' + speciality);
  }

}
