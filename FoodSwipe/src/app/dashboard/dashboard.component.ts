import { GeoLocation } from './../domain/models/geolocation';
import { ApiRepositoryService } from './../domain/api-repository.service';
import { Component, OnInit, Input, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoService } from '../domain';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  @Input()
  public enteredLocation: string;
  // otherwise user sees + replacing spaces in text box
  public passedInLocation: string;
  public newLocation: GeoLocation;
  public radiusMiles: number;
  public radiusMeters: number;

  constructor(
    private apiRepo: ApiRepositoryService,
    private router: Router,
    private infoService: InfoService
  ) { }

  ngOnInit() {
    // initialize the data inside the location as blank
    this.newLocation = {};
    this.radiusMiles = 0;
    this.enteredLocation = '';
  }



  public searchLocation() {
    console.log('Searching Location');
    // replace spaces with plus
    this.passedInLocation = this.enteredLocation.replace(/\s/g, '+');
    // search the user's location:
    this.apiRepo.getLocation(this.passedInLocation).subscribe(data => {
      this.newLocation.latitude = data.results[0].geometry.location.lat;
      this.newLocation.longitude = data.results[0].geometry.location.lng;
      this.infoService.setInfo(this.newLocation.latitude, this.newLocation.longitude, this.radiusMeters);
      this.router.navigateByUrl('/main');
    });

  }

  public getLocation() {

    this.apiRepo.getGeoLocation().subscribe(data => {
      this.newLocation.latitude = data.location.lat;
      this.newLocation.longitude = data.location.lng;
      this.infoService.setInfo(this.newLocation.latitude, this.newLocation.longitude, this.radiusMeters);
      this.router.navigateByUrl('/main');
    });
  }

  public milesToMeters() {
    this.radiusMeters = this.radiusMiles * 1609.34;
  }


}
