import {NewRxComponent} from './new-rx.component';
import {RxComponent} from './rx.component';
import {RxListComponent} from './rx-list.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RxRoutingModule} from './rx-routing.module';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RxService} from './rx.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, RxRoutingModule
  ],
  declarations: [
    RxComponent, RxListComponent, NewRxComponent
  ],
  providers: [ RxService ]
})
export class RxModule {}
