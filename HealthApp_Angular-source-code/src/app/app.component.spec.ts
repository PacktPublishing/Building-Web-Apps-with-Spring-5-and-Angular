import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AuthService } from './auth/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs/Observable';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;
  let authServiceStub;

  beforeEach(async(() => {

    authServiceStub = {
      isLoggedIn: Observable.of(true)
    };

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ AppComponent ],
      providers:    [ {provide: AuthService, useValue : authServiceStub }
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('h3'));
      authService = fixture.debugElement.injector.get(AuthService);
    });
  }));

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h3> text', () => {
    fixture.detectChanges();
    const h3 = de.nativeElement;
    expect(h3.innerText).toMatch(comp.appName);
  });

  it('should display a different app name', () => {
    comp.appName = 'Test HealthApp';
    fixture.detectChanges();
    const h3 = de.nativeElement;
    expect(h3.innerText).toMatch(comp.appName);
  });

});
