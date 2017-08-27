"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var doctor_service_1 = require("./doctor.service");
var DoctorListComponent = (function () {
    function DoctorListComponent(doctorService, router, route) {
        this.doctorService = doctorService;
        this.router = router;
        this.route = route;
        this.doctors = new Array();
    }
    DoctorListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            return _this.doctorService.getDoctorsBySpeciality(params.get('speciality'))
                .subscribe(function (doctors) { return _this.doctors = doctors; }, function (error) {
                _this.router.navigateByUrl('/auth/login');
                console.error('An error occurred in retrieving doctors list, navigating to login: ', error);
            });
        });
    };
    DoctorListComponent.prototype.onSelect = function (speciality) {
        this.router.navigateByUrl('doctor/' + speciality);
    };
    DoctorListComponent = __decorate([
        core_1.Component({
            selector: 'doctor-list',
            templateUrl: './doctor-list.component.html'
        }),
        __metadata("design:paramtypes", [doctor_service_1.DoctorService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], DoctorListComponent);
    return DoctorListComponent;
}());
exports.DoctorListComponent = DoctorListComponent;
//# sourceMappingURL=doctor-list.component.js.map