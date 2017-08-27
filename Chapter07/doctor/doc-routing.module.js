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
var doc_component_1 = require("./doc.component");
var doctor_list_component_1 = require("./doctor-list.component");
var doc_home_component_1 = require("./doc-home.component");
var docRoutes = [
    {
        path: 'doctor',
        component: doc_component_1.DocComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'home',
                        component: doc_home_component_1.DocHomeComponent,
                    },
                    {
                        path: '',
                        component: doctor_list_component_1.DoctorListComponent,
                    },
                    {
                        path: ':speciality',
                        component: doctor_list_component_1.DoctorListComponent,
                    },
                ],
            }
        ]
    }
];
var DocRoutingModule = (function () {
    function DocRoutingModule() {
    }
    DocRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(docRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], DocRoutingModule);
    return DocRoutingModule;
}());
exports.DocRoutingModule = DocRoutingModule;
//# sourceMappingURL=doc-routing.module.js.map