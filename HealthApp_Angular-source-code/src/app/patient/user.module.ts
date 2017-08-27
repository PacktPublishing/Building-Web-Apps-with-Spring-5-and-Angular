import {BrowserModule} from '@angular/platform-browser';
import {UserHomeComponent} from './user-home.component';
import {NgModule} from '@angular/core';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';

@NgModule({
  imports:      [ BrowserModule, UserRoutingModule ],
  declarations: [ UserComponent, UserHomeComponent],
})
export class UserModule { }
