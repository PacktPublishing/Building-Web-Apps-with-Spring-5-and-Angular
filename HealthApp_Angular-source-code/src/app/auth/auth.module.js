"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_component_1 = require("./auth.component");
var login_component_1 = require("./login.component");
var user_registration_component_1 = require("./user-registration.component");
var forgot_password_component_1 = require("./forgot-password.component");
var auth_service_1 = require("./auth.service");
var auth_app_routing_module_1 = require("./auth-app-routing.module");
var logout_component_1 = require("./logout.component");
var common_1 = require("@angular/common");
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, auth_app_routing_module_1.AuthRoutingModule],
            declarations: [auth_component_1.AuthComponent, login_component_1.LoginComponent,
                user_registration_component_1.UserRegistrationComponent, forgot_password_component_1.ForgotPasswordComponent, logout_component_1.LogoutComponent],
            providers: [{ provide: auth_service_1.AuthService, useClass: auth_service_1.AuthService }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map