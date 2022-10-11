import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F10OrejasPage } from './f10-orejas.page';

const routes: Routes = [
  {
    path: '',
    component: F10OrejasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F10OrejasPageRoutingModule {}
