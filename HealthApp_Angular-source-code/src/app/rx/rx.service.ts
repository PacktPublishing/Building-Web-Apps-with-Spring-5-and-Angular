import {Http, Headers, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
import {Rx} from './rx';
import {Observable} from 'rxjs/Observable';
import {Cookie} from 'ng2-cookies';

@Injectable()
export class RxService {
  private rxUrl = 'http://localhost:8080/rx';
  private newRxUrl = 'http://localhost:8080/rx/new';

  constructor(private http: Http) {
  }

  getRx(): Observable<Rx[]> {
    let headers = new Headers({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + Cookie.get('access_token')
    });

    return this.http.get(this.rxUrl, {headers: headers})
      .map(res => res.json())
      .catch(err => {
        return Observable.throw(err.json().error || 'Server error');
      });
  }

  createRx(rx: Rx): Observable<Rx> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'bearer ' + Cookie.get('access_token'));
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.newRxUrl, rx, options)
      .map(res => res.json())
      .catch(err => {
        return Observable.throw('Server Error');
      });
  }
}
