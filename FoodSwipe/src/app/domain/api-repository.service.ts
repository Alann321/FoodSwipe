import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable()
export class ApiRepositoryService {

  private zomatoKey = '62d9652426150fe284e1eff5ed7d98b3';
  private googleKey = 'AIzaSyDqwKoOqbL45nEFOWv0rPfxXLUAX2DSZus';
  private googleEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=';




  // const url = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
  // const key = 'AIzaSyCXa0QPxqzAMwEr2do9F0RA_v6TogZt4cw';
  private jeremyEndPoint = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
  private jeremyGoogleKey = 'AIzaSyCXa0QPxqzAMwEr2do9F0RA_v6TogZt4cw';


  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(protected httpClient: HttpClient) { }
  // GET : retrieves information about your location
  public getLocation(location: string): Observable<any> {
    return this.httpClient.get(`${this.googleEndpoint}${location}&key=${this.googleKey}`).pipe(
      catchError(this.handleException)
    );
  }
  // get the user's geolocation
  public getGeoLocation(): Observable<any> {
    return this.httpClient.get(`${this.jeremyEndPoint}&key=${this.jeremyGoogleKey}`).pipe(
      catchError(this.handleException)
    );
  }
  // error handling
  protected handleException(exception: any) {
    const message = `${exception.status} : ${exception.statusText}\r\n${exception.message}`;
    alert(message);
    return Observable.throw(exception);
  }
}
