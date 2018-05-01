import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiRepositoryService, InfoService } from './../domain/';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public info: any;
  public restaurants: any[];
  public cuisines: any[];
  constructor(
    private apiRepo: ApiRepositoryService,
    protected httpClient: HttpClient,
    private infoService: InfoService,
    private router: Router
  ) { }


  ngOnInit() {
    this.info = this.infoService.getInfo();
    this.getRestaurants();
    console.log(this.info);

  }

  public getRestaurants() {
    this.apiRepo.getRestaurants(this.info.lat, this.info.lng).subscribe(data => {
      this.restaurants = data.restaurants;
      this.cuisines = this.restaurants.map(obj => {
        return obj.restaurant.cuisines;
      });
      console.log(this.cuisines);
    });
  }

  public showResults() {
    console.log('Showing results');
    this.router.navigateByUrl('results');
  }

}
