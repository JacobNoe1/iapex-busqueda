import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R11ResultadosPage } from './r11-resultados.page';

const routes: Routes = [
  {
    path: '',
    component: R11ResultadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R11ResultadosPageRoutingModule {}
