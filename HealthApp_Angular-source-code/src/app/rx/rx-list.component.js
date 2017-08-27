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
var rx_service_1 = require("./rx.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var RxListComponent = (function () {
    function RxListComponent(rxService, router) {
        this.rxService = rxService;
        this.router = router;
        this.errorMessage = '';
    }
    RxListComponent.prototype.ngOnInit = function () {
        this.getRx();
    };
    RxListComponent.prototype.getRx = function () {
        var _this = this;
        this.rxService.getRx()
            .subscribe(function (rxlist) {
            _this.rxlist = rxlist;
            if (_this.rxlist.length === 0) {
                _this.errorMessage = 'There are no prescriptions you have created so far!';
            }
        }, function (error) {
            _this.router.navigateByUrl('/auth/login');
            console.error('An error occurred in retrieving rx list, navigating to login: ', error);
        });
    };
    RxListComponent = __decorate([
        core_1.Component({
            templateUrl: './rx-list.component.html'
        }),
        __metadata("design:paramtypes", [rx_service_1.RxService, router_1.Router])
    ], RxListComponent);
    return RxListComponent;
}());
exports.RxListComponent = RxListComponent;
//# sourceMappingURL=rx-list.component.js.map