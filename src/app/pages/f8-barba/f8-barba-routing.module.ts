import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F8BarbaPage } from './f8-barba.page';

const routes: Routes = [
  {
    path: '',
    component: F8BarbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F8BarbaPageRoutingModule {}
