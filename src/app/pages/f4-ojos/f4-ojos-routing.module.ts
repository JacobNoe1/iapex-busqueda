import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F4OjosPage } from './f4-ojos.page';

const routes: Routes = [
  {
    path: '',
    component: F4OjosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F4OjosPageRoutingModule {}
