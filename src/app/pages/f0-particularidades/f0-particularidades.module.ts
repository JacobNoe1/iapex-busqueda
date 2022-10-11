import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F0ParticularidadesPageRoutingModule } from './f0-particularidades-routing.module';

import { F0ParticularidadesPage } from './f0-particularidades.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F0ParticularidadesPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [F0ParticularidadesPage]
})
export class F0ParticularidadesPageModule {}
