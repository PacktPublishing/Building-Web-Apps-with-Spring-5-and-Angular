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
var UserRegistrationComponent = (function () {
    function UserRegistrationComponent(authService) {
        this.authService = authService;
        this.alertStyle = 'alert alert-success';
        this.signupStatus = new login_1.SignupStatus();
        this.model = new login_1.NewUser();
        this.isDoctor = false;
    }
    UserRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.isDoctor) {
            this.model.role = 1;
        }
        this.authService.signup(this.model)
            .then(function (status) {
            _this.signupStatus.code = status.code;
            _this.signupStatus.message = status.message;
            if (_this.signupStatus.code === 'USER_ACCOUNT_EXISTS') {
                _this.alertStyle = 'alert alert-danger';
            }
        });
        this.alertStyle = 'alert alert-success';
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: './user-registration.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
//# sourceMappingURL=user-registration.component.js.map