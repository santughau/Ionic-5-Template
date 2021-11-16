import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mhome2PageRoutingModule } from './mhome2-routing.module';

import { Mhome2Page } from './mhome2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mhome2PageRoutingModule
  ],
  declarations: [Mhome2Page]
})
export class Mhome2PageModule {}
