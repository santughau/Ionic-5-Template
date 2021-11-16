import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MHomePage1PageRoutingModule } from './m-home-page1-routing.module';

import { MHomePage1Page } from './m-home-page1.page';
import { NgxStarsModule } from 'ngx-stars';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MHomePage1PageRoutingModule,NgxStarsModule
  ],
  declarations: [MHomePage1Page]
})
export class MHomePage1PageModule {}
