import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable()
export class ApiRepositoryService {

  private zomatoKey = '62d9652426150fe284e1eff5ed7d98b3';
  private zomatoEndpoint = 'https://developers.zomato.com/api/v2.1/search?';
  private googleKey = 'AIzaSyDqwKoOqbL45nEFOWv0rPfxXLUAX2DSZus';
  private googleEndpoint = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  private jeremyEndPoint = 'https://www.googleapis.com/geolocation/v1/geolocate?key=';
  private jeremyGoogleKey = 'AIzaSyCXa0QPxqzAMwEr2do9F0RA_v6TogZt4cw';


  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'user-key': this.zomatoKey
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
    return this.httpClient.post(`${this.jeremyEndPoint}${this.jeremyGoogleKey}`, null).pipe(
      catchError(this.handleException)
    );
  }
  // get list of restaurants 1-20 within a given radius
  public getRestaurants(lat: number, lng: number, radius: number ): Observable<any> {
    return this.httpClient.get(`${this.zomatoEndpoint}/count=20&lat=${lat}&lon=${lng}&radius=${radius}`, this.httpOptions).pipe(
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
