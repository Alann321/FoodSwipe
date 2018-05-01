import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  public lat: number;
  public lng: number;
  public radius: number;
  public info: any;
  constructor() {
    this.info = {
      'lat': this.lat,
      'lng': this.lng,
      'radius': this.radius
    };
  }
  setInfo(latitude, longitude, radius) {
    this.info.lat = latitude;
    this.info.lng = longitude;
    this.info.radius = radius;
  }

  getInfo(): any {
    return this.info;
  }
}
