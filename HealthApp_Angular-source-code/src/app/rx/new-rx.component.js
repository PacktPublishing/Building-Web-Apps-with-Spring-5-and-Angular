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
var rx_1 = require("./rx");
var core_1 = require("@angular/core");
var rx_service_1 = require("./rx.service");
var router_1 = require("@angular/router");
var NewRxComponent = (function () {
    function NewRxComponent(rxService, router) {
        this.rxService = rxService;
        this.router = router;
        this.rx = new rx_1.Rx();
        this.rxStatus = new rx_1.RxStatus();
        this.alertStyle = '';
    }
    NewRxComponent.prototype.onSubmit = function () {
        var _this = this;
        this.rxService.createRx(this.rx)
            .subscribe(function (rx) {
            _this.rxStatus.code = 'SUCCESS';
            _this.rxStatus.message = 'Prescription is successfully created!';
            _this.alertStyle = 'alert alert-success';
        }, function (error) {
            if (error === 'invalid_token') {
                _this.rxStatus.code = 'FAILURE';
                _this.rxStatus.message = 'Prescription is not created. You need to login again!';
                _this.alertStyle = 'alert alert-danger';
            }
            else {
                console.error('An error occurred while creating the rx, navigating to login: ', error);
            }
            _this.router.navigateByUrl('/auth/login');
        });
    };
    NewRxComponent = __decorate([
        core_1.Component({
            templateUrl: './new-rx.component.html'
        }),
        __metadata("design:paramtypes", [rx_service_1.RxService, router_1.Router])
    ], NewRxComponent);
    return NewRxComponent;
}());
exports.NewRxComponent = NewRxComponent;
//# sourceMappingURL=new-rx.component.js.map