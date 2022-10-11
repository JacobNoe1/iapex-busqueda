import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F6BocaPage } from './f6-boca.page';

const routes: Routes = [
  {
    path: '',
    component: F6BocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F6BocaPageRoutingModule {}
