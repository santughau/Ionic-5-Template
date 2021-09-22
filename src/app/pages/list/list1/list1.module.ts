import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { List1PageRoutingModule } from './list1-routing.module';

import { List1Page } from './list1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    List1PageRoutingModule
  ],
  declarations: [List1Page]
})
export class List1PageModule {}
