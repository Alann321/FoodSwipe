import { GeoLocation } from './../domain/models/geolocation';
import { EnteredLocation } from './../domain/models/enteredlocation';
import { ApiRepositoryService } from './../domain/api-repository.service';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  @Input()
  public enteredLocation: EnteredLocation;

  public newLocation: GeoLocation;

  constructor(
    private apiRepo: ApiRepositoryService
  ) { }

  ngOnInit() {
    // initialize the data inside the location as blank
    this.newLocation = { };

    this.enteredLocation = {
      entry: ''
    };
  }



  public searchLocation() {
    console.log('Searching Location');

    // search the user's location:
    this.apiRepo.getLocation(this.enteredLocation.entry).subscribe(data => {
      console.log(data);
    });

  }

  public getLocation() {

    this.apiRepo.getGeoLocation().subscribe( data => {
      this.newLocation.latitude = data.location.lat;
      this.newLocation.longitude = data.location.lng;
      console.log(this.newLocation);

    });

    // routerLink = "/main"
  }


}
