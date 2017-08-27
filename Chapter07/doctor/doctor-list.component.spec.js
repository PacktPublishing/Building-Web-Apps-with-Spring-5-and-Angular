"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var doctor_list_component_1 = require("./doctor-list.component");
var doctor_service_1 = require("./doctor.service");
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var router_stubs_1 = require("../testing/router-stubs");
describe('DoctorListComponent', function () {
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            declarations: [doctor_list_component_1.DoctorListComponent],
            providers: [
                { provide: doctor_service_1.DoctorService, useValue: {} },
                { provide: router_1.Router, useClass: router_stubs_1.RouterStub },
                { provide: router_1.ActivatedRoute, useValue: router_stubs_1.ActivatedRouteStub },
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(doctor_list_component_1.DoctorListComponent);
        comp = fixture.componentInstance;
    });
    it('should tell ROUTER to navigate when speciality is clicked', testing_1.inject([router_1.Router], function (router) {
        var spy = spyOn(router, 'navigateByUrl');
        comp.onSelect('PHYSICIAN');
        var navArgs = spy.calls.first().args[0];
        expect(navArgs).toBe('doctor/PHYSICIAN');
        comp.onSelect('PEDIATRICIAN');
        navArgs = spy.calls.mostRecent().args[0];
        expect(navArgs).toBe('doctor/PEDIATRICIAN');
    }));
});
//# sourceMappingURL=doctor-list.component.spec.js.map