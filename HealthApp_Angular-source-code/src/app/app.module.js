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
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var home_component_1 = require("./home.component");
var page_not_found_component_1 = require("./page-not-found.component");
var doc_module_1 = require("./doctor/doc.module");
var auth_module_1 = require("./auth/auth.module");
var security_bypass_pipe_1 = require("./pipes/security-bypass.pipe");
var http_1 = require("@angular/http");
var user_module_1 = require("./patient/user.module");
var rx_module_1 = require("./rx/rx.module");
var common_1 = require("@angular/common");
var pipe_module_1 = require("./pipes/pipe-module");
var router_stub_module_1 = require("./testing/router-stub.module");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, pipe_module_1.PipeModule, auth_module_1.AuthModule, http_1.HttpModule, doc_module_1.DocModule, user_module_1.UserModule, rx_module_1.RxModule, router_stub_module_1.RouterStubModule,
                app_routing_module_1.AppRoutingModule,],
            declarations: [app_component_1.AppComponent, page_not_found_component_1.PageNotFoundComponent, home_component_1.HomeComponent, security_bypass_pipe_1.SecurityBypass],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map