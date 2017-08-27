import { Injectable } from '@angular/core';
import {Http, Response, Headers}  from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { Doctor } from './doctor';
import {Cookie} from 'ng2-cookies';


@Injectable()
export class DoctorService {
  private doctorsUrl = 'http://localhost:8080/doctor';
  public doctors: Observable<Doctor[]>;
  public doctorsCount = 0;

  constructor (private http: Http) {}

  getDoctorsBySpeciality(specialityCode: string): Observable<Doctor[]> {
    let path = '';
    if (specialityCode != null) {
      path = '/' + specialityCode;
    }

    let headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + Cookie.get('access_token')
    });

    this.doctors = this.http.get(this.doctorsUrl + path, {headers: headers})
      .map(this.extractData)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    return this.doctors;

  }

  getDoctorsCount() {
    return this.http.get(this.doctorsUrl + '/count')
      .map((res: Response) => res.json().count)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  private extractData(res: Response) {
    let body = res.json();
    let doctors = [];
    for (let i = 0; i < body.doctors.length; i++) {
      let doctorInfo = body.doctors[i];
      let doctor = new Doctor(doctorInfo.user.firstname, doctorInfo.user.lastname, doctorInfo.user.email, doctorInfo.specialityCode);
      doctors.push(doctor);
      this.doctorsCount++;
    }
    return doctors;
  }
}
