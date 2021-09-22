import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { List3PageRoutingModule } from './list3-routing.module';

import { List3Page } from './list3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    List3PageRoutingModule
  ],
  declarations: [List3Page]
})
export class List3PageModule {}
