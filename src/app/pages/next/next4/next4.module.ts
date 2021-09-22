import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Next4PageRoutingModule } from './next4-routing.module';

import { Next4Page } from './next4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Next4PageRoutingModule
  ],
  declarations: [Next4Page]
})
export class Next4PageModule {}
