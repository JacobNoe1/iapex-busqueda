import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F5NarizPage } from './f5-nariz.page';

const routes: Routes = [
  {
    path: '',
    component: F5NarizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F5NarizPageRoutingModule {}
