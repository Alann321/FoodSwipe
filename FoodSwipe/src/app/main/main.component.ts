import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiRepositoryService } from './../domain/api-repository.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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


  }


}
