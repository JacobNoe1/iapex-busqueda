import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosGeneralesPageRoutingModule } from './datos-generales-routing.module';

import { DatosGeneralesPage } from './datos-generales.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosGeneralesPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [DatosGeneralesPage]
})
export class DatosGeneralesPageModule {}
