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
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
var login_1 = require("./login");
var http_2 = require("@angular/http");
var router_1 = require("@angular/router");
var ng2_cookies_1 = require("ng2-cookies");
var AuthService = (function () {
    function AuthService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.user = { name: 'Guest' };
        this.serverUrl = 'http://localhost:8080';
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        this.isLoggedIn = new Observable_1.Observable(function (observer) {
            return _this.observer = observer;
        });
    }
    AuthService.prototype.checkLoginStatus = function () {
        return this.isLoggedIn;
    };
    AuthService.prototype.signup = function (newUser) {
        var url = this.serverUrl + "/account/signup";
        var options = new http_1.RequestOptions({ headers: this.headers });
        return this.http.post(url, newUser, options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AuthService.prototype.login = function (login) {
        var _this = this;
        var params = new URLSearchParams();
        params.append('username', login.email);
        params.append('password', login.password);
        params.append('grant_type', 'password');
        params.append('client_id', 'healthapp');
        var headers = new http_2.Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa('healthapp:HeAltH@!23') });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/oauth/token', params.toString(), options)
            .map(function (res) {
            _this.saveToken(res.json());
            return new login_1.LoginStatus('SUCCESS', 'Login Successful');
        })
            .catch(function (error) {
            return Observable_1.Observable.of(new login_1.LoginStatus('FAILURE', 'Username or password is incorrect. Please try again!'));
        });
    };
    AuthService.prototype.saveToken = function (token) {
        var expireDate = new Date().getTime() + (1000 * token.expires_in);
        ng2_cookies_1.Cookie.set('access_token', token.access_token, expireDate);
        ng2_cookies_1.Cookie.set('role', token.role);
        this.changeLoginStatus(true);
        if (token.role === 'ROLE_DOCTOR') {
            this.router.navigate(['rx']);
        }
        else {
            this.router.navigate(['patient/home']);
        }
    };
    AuthService.prototype.checkCredentials = function () {
        if (!ng2_cookies_1.Cookie.check('access_token')) {
            this.router.navigate(['/login']);
        }
    };
    AuthService.prototype.logout = function () {
        ng2_cookies_1.Cookie.delete('access_token');
        ng2_cookies_1.Cookie.delete('role');
        this.changeLoginStatus(false);
    };
    AuthService.prototype.changeLoginStatus = function (status) {
        if (this.observer !== undefined) {
            this.observer.next(status);
        }
        ;
    };
    AuthService.prototype.token = function () {
        var url = this.serverUrl + "/account/token";
        var options = new http_1.RequestOptions({ headers: this.headers, withCredentials: true });
        this.http.get(url, options)
            .toPromise()
            .then(function (response) {
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map