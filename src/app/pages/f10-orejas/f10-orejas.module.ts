import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F10OrejasPageRoutingModule } from './f10-orejas-routing.module';

import { F10OrejasPage } from './f10-orejas.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F10OrejasPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [F10OrejasPage]
})
export class F10OrejasPageModule {}
