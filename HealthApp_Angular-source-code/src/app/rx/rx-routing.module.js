"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var rx_list_component_1 = require("./rx-list.component");
var new_rx_component_1 = require("./new-rx.component");
var rx_component_1 = require("./rx.component");
var rxRoutes = [
    {
        path: 'rx',
        component: rx_component_1.RxComponent,
        children: [
            {
                path: '',
                component: rx_list_component_1.RxListComponent,
            },
            {
                path: 'new',
                component: new_rx_component_1.NewRxComponent,
            }
        ],
    }
];
var RxRoutingModule = (function () {
    function RxRoutingModule() {
    }
    RxRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(rxRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], RxRoutingModule);
    return RxRoutingModule;
}());
exports.RxRoutingModule = RxRoutingModule;
//# sourceMappingURL=rx-routing.module.js.map