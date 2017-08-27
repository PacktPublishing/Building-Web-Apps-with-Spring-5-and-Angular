import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocComponent }       from './doc.component';
import { DoctorListComponent }       from './doctor-list.component';
import { DocHomeComponent } from './doc-home.component';


const docRoutes: Routes = [
  {
    path: 'doctor',
    component: DocComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'home',
            component: DocHomeComponent,
          },
          {
            path: '',
            component: DoctorListComponent,
          },
          {
            path: ':speciality',
            component: DoctorListComponent,
          },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(docRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DocRoutingModule { }

