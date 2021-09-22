import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Payment4PageRoutingModule } from './payment4-routing.module';

import { Payment4Page } from './payment4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Payment4PageRoutingModule
  ],
  declarations: [Payment4Page]
})
export class Payment4PageModule {}
