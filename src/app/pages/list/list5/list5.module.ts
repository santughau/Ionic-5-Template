import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { List5PageRoutingModule } from './list5-routing.module';

import { List5Page } from './list5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    List5PageRoutingModule
  ],
  declarations: [List5Page]
})
export class List5PageModule {}
