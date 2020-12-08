import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityDetailsPageRoutingModule } from './city-details-routing.module';

import { CityDetailsPage } from './city-details.page';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxPaginationModule,
    CityDetailsPageRoutingModule
  ],
  declarations: [CityDetailsPage]
})
export class CityDetailsPageModule {}
