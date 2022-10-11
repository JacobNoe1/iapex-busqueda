import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F7LabiosPage } from './f7-labios.page';

const routes: Routes = [
  {
    path: '',
    component: F7LabiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F7LabiosPageRoutingModule {}
