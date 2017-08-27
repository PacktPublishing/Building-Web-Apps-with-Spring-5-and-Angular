import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RxListComponent} from './rx-list.component';
import {NewRxComponent} from './new-rx.component';
import {RxComponent} from './rx.component';

const rxRoutes: Routes = [
  {
    path: 'rx',
    component: RxComponent,
    children: [
          {
            path: '',
            component: RxListComponent,
          },
          {
            path: 'new',
            component: NewRxComponent,
          }
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(rxRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RxRoutingModule { }
