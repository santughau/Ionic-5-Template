import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MhomePage3PageRoutingModule } from './mhome-page3-routing.module';

import { MhomePage3Page } from './mhome-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MhomePage3PageRoutingModule
  ],
  declarations: [MhomePage3Page]
})
export class MhomePage3PageModule {}
