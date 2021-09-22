import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Payment6PageRoutingModule } from './payment6-routing.module';

import { Payment6Page } from './payment6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Payment6PageRoutingModule
  ],
  declarations: [Payment6Page]
})
export class Payment6PageModule {}
