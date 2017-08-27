import {UserComponent} from './user.component';
import {RouterModule, Routes} from '@angular/router';
import {UserHomeComponent} from './user-home.component';
import {NgModule} from '@angular/core';

const userRoutes: Routes = [
  {
    path: 'patient',
    component: UserComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'home',
            component: UserHomeComponent,
          }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
