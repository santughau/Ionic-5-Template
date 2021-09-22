import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Payment5PageRoutingModule } from './payment5-routing.module';

import { Payment5Page } from './payment5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Payment5PageRoutingModule
  ],
  declarations: [Payment5Page]
})
export class Payment5PageModule {}
