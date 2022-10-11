import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R11ResultadosPageRoutingModule } from './r11-resultados-routing.module';

import { R11ResultadosPage } from './r11-resultados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R11ResultadosPageRoutingModule
  ],
  declarations: [R11ResultadosPage]
})
export class R11ResultadosPageModule {}
