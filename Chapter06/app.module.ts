import {NgModule}      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent }  from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

import { DocModule } from './doctor/doc.module';
import { AuthModule } from './auth/auth.module';
import { SecurityBypass } from './pipes/security-bypass.pipe';
import { HttpModule } from '@angular/http';
import { UserModule } from './patient/user.module';
import { RxModule } from './rx/rx.module';
import {CommonModule} from '@angular/common';
import {PipeModule} from './pipes/pipe-module';
import {RouterStubModule} from './testing/router-stub.module';
import {RouterModule} from '@angular/router';
import { provideRoutes} from '@angular/router';

@NgModule({
  imports:      [ CommonModule, FormsModule, RouterModule, PipeModule, AuthModule, HttpModule, DocModule, UserModule, RxModule, RouterStubModule,
    AppRoutingModule, ],
  declarations: [ AppComponent, PageNotFoundComponent, HomeComponent, SecurityBypass],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
