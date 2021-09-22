import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Next5PageRoutingModule } from './next5-routing.module';

import { Next5Page } from './next5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Next5PageRoutingModule
  ],
  declarations: [Next5Page]
})
export class Next5PageModule {}
