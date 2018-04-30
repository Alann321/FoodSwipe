import { GeoLocation } from './../domain/models/geolocation';
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
  public enteredLocation: string;
  // otherwise user sees + replacing spaces in text box
  public passedInLocation: string;
  public newLocation: GeoLocation;

  constructor(
    private apiRepo: ApiRepositoryService,
    private router: Router
  ) { }

  ngOnInit() {
    // initialize the data inside the location as blank
    this.newLocation = { };

    this.enteredLocation = '';
  }



  public searchLocation() {
    console.log('Searching Location');
    // replace spaces with plus
    this.passedInLocation = this.enteredLocation.replace(/\s/g, '+');
    // search the user's location:
    this.apiRepo.getLocation(this.passedInLocation).subscribe(data => {
      this.newLocation.latitude = data.results[0].geometry.location.lat; // filler
      this.newLocation.longitude = data.results[0].geometry.location.lng; // filler
      this.router.navigateByUrl('/main');
      console.log(this.newLocation);
    });

  }

  public getLocation() {

    this.apiRepo.getGeoLocation().subscribe( data => {
      this.newLocation.latitude = data.location.lat;
      this.newLocation.longitude = data.location.lng;
      console.log(this.newLocation);
      this.router.navigateByUrl('/main');

    });

    // routerLink = "/main"
  }


}
