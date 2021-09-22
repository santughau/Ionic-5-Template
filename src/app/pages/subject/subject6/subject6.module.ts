import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subject6PageRoutingModule } from './subject6-routing.module';

import { Subject6Page } from './subject6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subject6PageRoutingModule
  ],
  declarations: [Subject6Page]
})
export class Subject6PageModule {}
