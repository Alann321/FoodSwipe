import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiRepositoryService, InfoService } from './../domain/';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public info: any;
  public restaurants: any[];
  public cuisines: any[];
  public suggested: any[];
  public iterator: number;
  constructor(
    private apiRepo: ApiRepositoryService,
    protected httpClient: HttpClient,
    private infoService: InfoService,
    private router: Router
  ) { }


  ngOnInit() {
    this.info = this.infoService.getInfo();
    this.getRestaurants();
    this.iterator = 0;
    this.suggested = [];

  }

  public getRestaurants() {
    this.apiRepo.getRestaurants(this.info.lat, this.info.lng).subscribe(data => {
      this.restaurants = data.restaurants;
      this.cuisines = this.restaurants.map(obj => {
        return obj.restaurant.cuisines;
      });
      // filter out duplicates
      this.cuisines = Array.from(new Set(this.cuisines));
    });
  }


  public showResults() {
    // send in the restaurants to the shared service
    this.infoService.setResults(this.suggested);
    // navigate to the results page
    this.router.navigateByUrl('/results');
  }
  public yes() {
    // loop through restaurant array to add
    for ( let i = 0; i < this.restaurants.length; i++) {
      if (this.restaurants[i].restaurant.cuisines === this.cuisines[this.iterator]) {
        this.suggested.push(this.restaurants[i]);
      }
    }
    this.filterRestaurants();
    // console.log(this.suggested);
    this.iterator++;
  }

  public no() {
    this.filterRestaurants();
    this.iterator++;
    // console.log(this.restaurants);
  }

  public filterRestaurants() {
    const filterer = this.restaurants.filter( x => x.restaurant.cuisines === this.cuisines[this.iterator]);
    filterer.forEach( f => this.restaurants.splice(this.restaurants.findIndex(e => e.restaurant.cuisines === f.restaurant.cuisines), 1));
  }

}
