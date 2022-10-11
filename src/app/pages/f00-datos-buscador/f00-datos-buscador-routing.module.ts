import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F00DatosBuscadorPage } from './f00-datos-buscador.page';

const routes: Routes = [
  {
    path: '',
    component: F00DatosBuscadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F00DatosBuscadorPageRoutingModule {}
