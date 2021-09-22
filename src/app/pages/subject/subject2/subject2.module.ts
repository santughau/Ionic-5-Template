import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subject2PageRoutingModule } from './subject2-routing.module';

import { Subject2Page } from './subject2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subject2PageRoutingModule
  ],
  declarations: [Subject2Page]
})
export class Subject2PageModule {}
