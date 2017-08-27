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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
var doctor_1 = require("./doctor");
var ng2_cookies_1 = require("ng2-cookies");
var DoctorService = (function () {
    function DoctorService(http) {
        this.http = http;
        this.doctorsUrl = 'http://localhost:8080/doctor';
        this.doctorsCount = 0;
    }
    DoctorService.prototype.getDoctorsBySpeciality = function (specialityCode) {
        var path = '';
        if (specialityCode != null) {
            path = '/' + specialityCode;
        }
        var headers = new http_1.Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Authorization': 'Bearer ' + ng2_cookies_1.Cookie.get('access_token')
        });
        this.doctors = this.http.get(this.doctorsUrl + path, { headers: headers })
            .map(this.extractData)
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
        return this.doctors;
    };
    DoctorService.prototype.getDoctorsCount = function () {
        return this.http.get(this.doctorsUrl + '/count')
            .map(function (res) { return res.json().count; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    DoctorService.prototype.extractData = function (res) {
        var body = res.json();
        var doctors = [];
        for (var i = 0; i < body.doctors.length; i++) {
            var doctorInfo = body.doctors[i];
            var doctor = new doctor_1.Doctor(doctorInfo.user.firstname, doctorInfo.user.lastname, doctorInfo.user.email, doctorInfo.specialityCode);
            doctors.push(doctor);
            this.doctorsCount++;
        }
        return doctors;
    };
    DoctorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DoctorService);
    return DoctorService;
}());
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map