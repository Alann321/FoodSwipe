import { GeoLocation } from './../domain/models/geolocation';
import { EnteredLocation } from './../domain/models/enteredlocation';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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
    private apiRepo: ApiRepositoryService,
    protected httpClient: HttpClient
  ) { }

  // http options with headers
  protected httpOptions  = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  ngOnInit() {
    // initialize the data inside the location as blank
    this.newLocation = {
      latitude: 0,
      longitude: 0
    };

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

    // get the location by typing the city name (an alternative)
    /*
    this.apiRepo.getLocation('Dallas').subscribe(data => {
      console.log(data);
    });
    */

   // get the user's location:
    const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
    const key = 'AIzaSyCXa0QPxqzAMwEr2do9F0RA_v6TogZt4cw';
    const fullUrl = (url + key);

    // make interface for the location response given by google api
    interface LocationResponse {
        location: {
          lat: 51.0,
          lng: -0.1
        };
        accuracy: 1200.4;
    }

    // send post request to api
    this.httpClient.post<LocationResponse>(fullUrl, this.httpOptions).subscribe(data => {
      console.log(data.location.lat);
      console.log(data.location.lng);
    });

    // routerLink = "/main"
  }


}
