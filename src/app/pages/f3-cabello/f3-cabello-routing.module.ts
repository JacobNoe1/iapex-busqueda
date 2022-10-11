import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F3CabelloPage } from './f3-cabello.page';

const routes: Routes = [
  {
    path: '',
    component: F3CabelloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F3CabelloPageRoutingModule {}
