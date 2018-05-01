import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  public results: any[];

  public lat: number;
  public lng: number;
  public info: any;
  constructor() {
    this.info = {
      'lat': this.lat,
      'lng': this.lng
    };
    this.results = [];
  }

  setInfo(latitude, longitude) {
    this.info.lat = latitude;
    this.info.lng = longitude;
  }

  getInfo(): any {
    return this.info;
  }


  setResults(any) {
    this.results = any;
  }

  getResults(): any {
    return this.results;
  }

}
