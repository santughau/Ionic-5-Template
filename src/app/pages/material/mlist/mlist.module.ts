import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MlistPageRoutingModule } from './mlist-routing.module';

import { MlistPage } from './mlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MlistPageRoutingModule
  ],
  declarations: [MlistPage]
})
export class MlistPageModule {}
