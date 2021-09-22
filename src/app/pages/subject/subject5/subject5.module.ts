import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Subject5PageRoutingModule } from './subject5-routing.module';

import { Subject5Page } from './subject5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Subject5PageRoutingModule
  ],
  declarations: [Subject5Page]
})
export class Subject5PageModule {}
