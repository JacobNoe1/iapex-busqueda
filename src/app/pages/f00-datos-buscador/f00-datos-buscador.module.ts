import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F00DatosBuscadorPageRoutingModule } from './f00-datos-buscador-routing.module';

import { F00DatosBuscadorPage } from './f00-datos-buscador.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F00DatosBuscadorPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [F00DatosBuscadorPage]
})
export class F00DatosBuscadorPageModule {}
