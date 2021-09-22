import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subject3PageRoutingModule } from './subject3-routing.module';

import { Subject3Page } from './subject3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subject3PageRoutingModule
  ],
  declarations: [Subject3Page]
})
export class Subject3PageModule {}
