import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArLocationPageRoutingModule } from './ar-location-routing.module';

import { ArLocationPage } from './ar-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArLocationPageRoutingModule
  ],
  declarations: [ArLocationPage]
})
export class ArLocationPageModule {}
