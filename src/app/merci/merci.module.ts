import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerciPageRoutingModule } from './merci-routing.module';

import { MerciPage } from './merci.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerciPageRoutingModule
  ],
  declarations: [MerciPage]
})
export class MerciPageModule {}
