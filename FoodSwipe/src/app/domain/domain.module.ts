import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { GeoLocation } from './models/geolocation';
import { EnteredLocation } from './models/enteredlocation';
import { ApiRepositoryService } from './api-repository.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    ApiRepositoryService,
    GeoLocation,
    EnteredLocation
  ]
})
export class DomainModule { }
