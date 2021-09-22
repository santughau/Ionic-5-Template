import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subject1PageRoutingModule } from './subject1-routing.module';

import { Subject1Page } from './subject1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subject1PageRoutingModule
  ],
  declarations: [Subject1Page]
})
export class Subject1PageModule {}
