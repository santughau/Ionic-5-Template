import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Demo3PageRoutingModule } from './demo3-routing.module';

import { Demo3Page } from './demo3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Demo3PageRoutingModule
  ],
  declarations: [Demo3Page]
})
export class Demo3PageModule {}
