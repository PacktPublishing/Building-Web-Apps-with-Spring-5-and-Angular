import {async, ComponentFixture, TestBed, inject, getTestBed} from '@angular/core/testing';
import {BaseRequestOptions, Http, HttpModule} from '@angular/http';

import {DoctorService} from './doctor.service';
import {MockBackend} from '@angular/http/testing';
import {ConnectionHelper} from '../testing/http-stubs';
import {Doctor} from "./doctor";


describe('DoctorService', function () {
  let doctorService: DoctorService;
  let mockBackend: MockBackend;
  let connectionHelper: ConnectionHelper;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:    [
        MockBackend, BaseRequestOptions, DoctorService,
        {
          deps: [ MockBackend, BaseRequestOptions ],
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        },
      ],
    }).compileComponents().then(() => {
      const testbed = getTestBed();
      mockBackend = testbed.get(MockBackend);
      doctorService = testbed.get(DoctorService);
      connectionHelper = new ConnectionHelper();
    });
  }));

  it('should return the list of doctors by speciality', () => {
    connectionHelper.setupConnections(mockBackend, {
      status: 200,
      body: {
        message: '',
        doctors: [
          {
            user: {
              firstname: 'Calvin',
              lastname: 'Hobbes',
              email: 'ch@gmail.com',
            },
            specialityCode: 'PHYSICIAN'
          },
          {
            user: {
              firstname: 'Micky',
              lastname: 'Mouse',
              email: 'mm@gmail.com',
            },
            specialityCode: 'PEDIATRICIAN'
          }],
        count: 3
      }
    });

    doctorService.getDoctorsBySpeciality('').subscribe((doctors: Doctor[]) => {
      expect(doctors.length).toBe(2);
      expect(doctors[0].firstname).toBe('Calvin');
      expect(doctors[0].specialityCode).toBe('PHYSICIAN');
      expect(doctors[1].firstname).toBe('Micky');
      expect(doctors[1].specialityCode).toBe('PEDIATRICIAN');
    });
  });

  it('should return the doctors count', () => {
    connectionHelper.setupConnections(mockBackend, {
      status: 200,
      body: {
        message: '',
        doctors: [],
        count: 3
      }
    });
    doctorService.getDoctorsCount().subscribe((count: number) => {
      expect(count).toBe(3);
    });
  });

});


