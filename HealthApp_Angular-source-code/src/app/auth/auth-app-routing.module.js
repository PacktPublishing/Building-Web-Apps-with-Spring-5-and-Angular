"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_component_1 = require("./auth.component");
var login_component_1 = require("./login.component");
var user_registration_component_1 = require("./user-registration.component");
var forgot_password_component_1 = require("./forgot-password.component");
var logout_component_1 = require("./logout.component");
var authRoutes = [
    {
        path: 'auth', component: auth_component_1.AuthComponent,
        children: [
            {
                path: 'login',
                component: login_component_1.LoginComponent,
            },
            {
                path: 'register',
                component: user_registration_component_1.UserRegistrationComponent,
            },
            {
                path: 'forgotpassword',
                component: forgot_password_component_1.ForgotPasswordComponent,
            },
            {
                path: 'logout',
                component: logout_component_1.LogoutComponent,
            },
        ]
    }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(authRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());
exports.AuthRoutingModule = AuthRoutingModule;
//# sourceMappingURL=auth-app-routing.module.js.map