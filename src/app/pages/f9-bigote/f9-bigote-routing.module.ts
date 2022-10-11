import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F9BigotePage } from './f9-bigote.page';

const routes: Routes = [
  {
    path: '',
    component: F9BigotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F9BigotePageRoutingModule {}
