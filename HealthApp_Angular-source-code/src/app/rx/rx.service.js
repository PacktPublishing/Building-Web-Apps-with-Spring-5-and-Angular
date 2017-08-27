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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var ng2_cookies_1 = require("ng2-cookies");
var RxService = (function () {
    function RxService(http) {
        this.http = http;
        this.rxUrl = 'http://localhost:8080/rx';
        this.newRxUrl = 'http://localhost:8080/rx/new';
    }
    RxService.prototype.getRx = function () {
        var headers = new http_1.Headers({
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + ng2_cookies_1.Cookie.get('access_token')
        });
        return this.http.get(this.rxUrl, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Observable_1.Observable.throw(err.json().error || 'Server error');
        });
    };
    RxService.prototype.createRx = function (rx) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'bearer ' + ng2_cookies_1.Cookie.get('access_token'));
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.newRxUrl, rx, options)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Observable_1.Observable.throw('Server Error');
        });
    };
    RxService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], RxService);
    return RxService;
}());
exports.RxService = RxService;
//# sourceMappingURL=rx.service.js.map