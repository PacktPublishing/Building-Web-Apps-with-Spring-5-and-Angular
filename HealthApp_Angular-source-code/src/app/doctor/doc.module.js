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
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var common_1 = require("@angular/common");
var doctor_list_component_1 = require("./doctor-list.component");
var doc_component_1 = require("./doc.component");
var doctor_service_1 = require("./doctor.service");
var auth_guard_service_1 = require("../auth/auth-guard.service");
var doc_routing_module_1 = require("./doc-routing.module");
var doc_home_component_1 = require("./doc-home.component");
var DocModule = (function () {
    function DocModule() {
    }
    DocModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, http_2.HttpClientModule, doc_routing_module_1.DocRoutingModule
            ],
            declarations: [
                doctor_list_component_1.DoctorListComponent, doc_component_1.DocComponent, doc_home_component_1.DocHomeComponent
            ],
            providers: [doctor_service_1.DoctorService, auth_guard_service_1.AuthGuardService]
        })
    ], DocModule);
    return DocModule;
}());
exports.DocModule = DocModule;
//# sourceMappingURL=doc.module.js.map