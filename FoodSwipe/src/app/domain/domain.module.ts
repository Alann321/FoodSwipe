import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { GeoLocation } from './models/geolocation';
import { ApiRepositoryService } from './api-repository.service';
import { InfoService } from './info.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    ApiRepositoryService,
    GeoLocation,
    InfoService

  ]
})
export class DomainModule { }
