"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var doctor_service_1 = require("./doctor.service");
var testing_2 = require("@angular/http/testing");
var http_stubs_1 = require("../testing/http-stubs");
describe('DoctorService', function () {
    var doctorService;
    var mockBackend;
    var connectionHelper;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                testing_2.MockBackend, http_1.BaseRequestOptions, doctor_service_1.DoctorService,
                {
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions],
                    provide: http_1.Http,
                    useFactory: function (backend, defaultOptions) {
                        return new http_1.Http(backend, defaultOptions);
                    }
                },
            ],
        }).compileComponents().then(function () {
            var testbed = testing_1.getTestBed();
            mockBackend = testbed.get(testing_2.MockBackend);
            doctorService = testbed.get(doctor_service_1.DoctorService);
            connectionHelper = new http_stubs_1.ConnectionHelper();
        });
    }));
    it('should return the list of doctors by speciality', function () {
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
                    }
                ],
                count: 3
            }
        });
        doctorService.getDoctorsBySpeciality('').subscribe(function (doctors) {
            expect(doctors.length).toBe(2);
            expect(doctors[0].firstname).toBe('Calvin');
            expect(doctors[0].specialityCode).toBe('PHYSICIAN');
            expect(doctors[1].firstname).toBe('Micky');
            expect(doctors[1].specialityCode).toBe('PEDIATRICIAN');
        });
    });
    it('should return the doctors count', function () {
        connectionHelper.setupConnections(mockBackend, {
            status: 200,
            body: {
                message: '',
                doctors: [],
                count: 3
            }
        });
        doctorService.getDoctorsCount().subscribe(function (count) {
            expect(count).toBe(3);
        });
    });
});
//# sourceMappingURL=doctor.service.spec.js.map