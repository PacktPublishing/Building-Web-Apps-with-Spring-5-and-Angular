import { DoctorListComponent } from './doctor-list.component';
import { DoctorService } from './doctor.service';

import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {ActivatedRouteStub, RouterStub} from '../testing/router-stubs';

describe('DoctorListComponent', function () {
  let comp: DoctorListComponent;
  let fixture: ComponentFixture<DoctorListComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ DoctorListComponent ],
      providers:    [
        { provide: DoctorService, useValue: {} },
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: ActivatedRouteStub },
        ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListComponent);
    comp = fixture.componentInstance;
  });


  it('should tell ROUTER to navigate when speciality is clicked',
    inject([Router], (router: Router) => {

      const spy = spyOn(router, 'navigateByUrl');
      comp.onSelect('PHYSICIAN');
      let navArgs = spy.calls.first().args[0];
      expect(navArgs).toBe('doctor/PHYSICIAN');

      comp.onSelect('PEDIATRICIAN');
      navArgs = spy.calls.mostRecent().args[0];
      expect(navArgs).toBe('doctor/PEDIATRICIAN');
    }));

});
