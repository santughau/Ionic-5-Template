import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdetailsPageRoutingModule } from './mdetails-routing.module';

import { MdetailsPage } from './mdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdetailsPageRoutingModule
  ],
  declarations: [MdetailsPage]
})
export class MdetailsPageModule {}
