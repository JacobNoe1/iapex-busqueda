import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F2CaraPage } from './f2-cara.page';

const routes: Routes = [
  {
    path: '',
    component: F2CaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F2CaraPageRoutingModule {}
