"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var new_rx_component_1 = require("./new-rx.component");
var rx_component_1 = require("./rx.component");
var rx_list_component_1 = require("./rx-list.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var rx_routing_module_1 = require("./rx-routing.module");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var rx_service_1 = require("./rx.service");
var RxModule = (function () {
    function RxModule() {
    }
    RxModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule, rx_routing_module_1.RxRoutingModule
            ],
            declarations: [
                rx_component_1.RxComponent, rx_list_component_1.RxListComponent, new_rx_component_1.NewRxComponent
            ],
            providers: [rx_service_1.RxService]
        })
    ], RxModule);
    return RxModule;
}());
exports.RxModule = RxModule;
//# sourceMappingURL=rx.module.js.map