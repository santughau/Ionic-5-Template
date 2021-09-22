import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { List4PageRoutingModule } from './list4-routing.module';

import { List4Page } from './list4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    List4PageRoutingModule
  ],
  declarations: [List4Page]
})
export class List4PageModule {}
