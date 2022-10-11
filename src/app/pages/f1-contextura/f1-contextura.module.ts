import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F1ContexturaPageRoutingModule } from './f1-contextura-routing.module';

import { F1ContexturaPage } from './f1-contextura.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F1ContexturaPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [F1ContexturaPage]
})
export class F1ContexturaPageModule {}
