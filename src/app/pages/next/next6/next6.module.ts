import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Next6PageRoutingModule } from './next6-routing.module';

import { Next6Page } from './next6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Next6PageRoutingModule
  ],
  declarations: [Next6Page]
})
export class Next6PageModule {}
