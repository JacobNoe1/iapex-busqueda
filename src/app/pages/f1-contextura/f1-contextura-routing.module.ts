import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F1ContexturaPage } from './f1-contextura.page';

const routes: Routes = [
  {
    path: '',
    component: F1ContexturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F1ContexturaPageRoutingModule {}
