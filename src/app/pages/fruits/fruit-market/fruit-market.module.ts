import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitMarketPageRoutingModule } from './fruit-market-routing.module';

import { FruitMarketPage } from './fruit-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitMarketPageRoutingModule
  ],
  declarations: [FruitMarketPage]
})
export class FruitMarketPageModule {}
