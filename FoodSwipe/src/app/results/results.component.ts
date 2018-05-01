import { InfoService } from './../domain/info.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  // make an object for holding the swiped restaurants
  public swipedRestaurants: any [] = [];

  constructor(
    // get results from the info service (do this later)
    private infoService: InfoService
  ) { }

  ngOnInit() {
    // get the swiped restaurants
    this.swipedRestaurants = this.infoService.getResults();
  }

  // function for getting the number of dollar signs
  public getDollarSigns(numberSigns: number) {

    // make counter variable
    let i: number;

    // string to be returned with the total signs
    let totalSigns: string;
    totalSigns = '';

    // loop through and append dollar signs
    for (i = 0; i < numberSigns; i++) {
      totalSigns += '$';
    }

    // return the total signs
    return totalSigns;
  }


}
