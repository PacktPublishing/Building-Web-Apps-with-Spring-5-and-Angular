"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var auth_service_1 = require("./auth/auth.service");
var testing_2 = require("@angular/router/testing");
var Observable_1 = require("rxjs/Observable");
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    var authService;
    var authServiceStub;
    beforeEach(testing_1.async(function () {
        authServiceStub = {
            isLoggedIn: Observable_1.Observable.of(true)
        };
        testing_1.TestBed.configureTestingModule({
            imports: [
                testing_2.RouterTestingModule
            ],
            declarations: [app_component_1.AppComponent],
            providers: [{ provide: auth_service_1.AuthService, useValue: authServiceStub }
            ]
        })
            .compileComponents()
            .then(function () {
            fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement.query(platform_browser_1.By.css('h3'));
            authService = fixture.debugElement.injector.get(auth_service_1.AuthService);
        });
    }));
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h3> text', function () {
        fixture.detectChanges();
        var h3 = de.nativeElement;
        expect(h3.innerText).toMatch(comp.appName);
    });
    it('should display a different app name', function () {
        comp.appName = 'Test HealthApp';
        fixture.detectChanges();
        var h3 = de.nativeElement;
        expect(h3.innerText).toMatch(comp.appName);
    });
});
//# sourceMappingURL=app.component.spec.js.map