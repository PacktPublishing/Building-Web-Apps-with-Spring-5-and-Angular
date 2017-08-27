import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DoctorListComponent }    from './doctor-list.component';
import { DocComponent } from './doc.component';
import { DoctorService } from './doctor.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { DocRoutingModule } from './doc-routing.module';
import { DocHomeComponent } from './doc-home.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, HttpClientModule, DocRoutingModule
  ],
  declarations: [
    DoctorListComponent, DocComponent, DocHomeComponent
  ],
  providers: [ DoctorService, AuthGuardService ]
})
export class DocModule {}
