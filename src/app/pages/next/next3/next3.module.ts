import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Next3PageRoutingModule } from './next3-routing.module';

import { Next3Page } from './next3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Next3PageRoutingModule
  ],
  declarations: [Next3Page]
})
export class Next3PageModule {}
