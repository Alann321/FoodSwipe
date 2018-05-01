import { InfoService } from './../domain/info.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {


  public swipedRestaurants: any [] = [];
  public givenRestaurant: any;


  constructor(
    // get results from the info service (do this later)
    private infoService: InfoService
  ) { }

  ngOnInit() {

    this.givenRestaurant = {name: 'hello', cuisine: 'world', description: 'this place is awesome!'};
    this.swipedRestaurants.push(this.givenRestaurant);
    this.givenRestaurant = {name: 'Chipotle', cuisine: 'Mexican', description: 'Greatest tacos ever!!'};
    this.swipedRestaurants.push(this.givenRestaurant);
    this.givenRestaurant = {name: 'Chipotle', cuisine: 'Mexican', description: 'Greatest tacos ever!!'};
    this.swipedRestaurants.push(this.givenRestaurant);
    this.givenRestaurant = {name: 'Chipotle', cuisine: 'Mexican', description: 'Greatest tacos ever!!'};
    this.swipedRestaurants.push(this.givenRestaurant);
    this.givenRestaurant = {name: 'Chipotle', cuisine: 'Mexican', description: 'Greatest tacos ever!!'};
    this.swipedRestaurants.push(this.givenRestaurant);
    this.givenRestaurant = {name: 'Chipotle', cuisine: 'Mexican', description: 'Greatest tacos ever!!'};
    this.swipedRestaurants.push(this.givenRestaurant);
    this.givenRestaurant = {name: 'Chipotle', cuisine: 'Mexican', description: 'Greatest tacos ever!!'};
    this.swipedRestaurants.push(this.givenRestaurant);
    this.givenRestaurant = {name: 'Chipotle', cuisine: 'Mexican', description: 'Greatest tacos ever!!'};
    this.swipedRestaurants.push(this.givenRestaurant);
  }




}
