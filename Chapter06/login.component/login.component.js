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
var login_1 = require("./login");
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.alertStyle = '';
        this.loginStatus = new login_1.LoginStatus('', '');
        this.model = new login_1.Login('', '');
    }
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.initLogin();
        this.authService.login(this.model)
            .subscribe(function (status) {
            _this.loginStatus = status;
            if (status.code === 'FAILURE') {
                _this.alertStyle = 'alert alert-danger';
            }
        });
    };
    LoginComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    LoginComponent.prototype.initLogin = function () {
        this.alertStyle = '';
        this.loginStatus.code = '';
        this.loginStatus.message = '';
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './login.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map