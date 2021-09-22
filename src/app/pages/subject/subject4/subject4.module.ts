import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subject4PageRoutingModule } from './subject4-routing.module';

import { Subject4Page } from './subject4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subject4PageRoutingModule
  ],
  declarations: [Subject4Page]
})
export class Subject4PageModule {}
