import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ApiRepositoryService, InfoService } from './../domain/';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public info: any;
  public restaurants: any[];
  constructor(
    private apiRepo: ApiRepositoryService,
    protected httpClient: HttpClient,
    private infoService: InfoService
  ) { }


  ngOnInit() {
    this.info = this.infoService.getInfo();
    // this.getRestaurants();
    console.log(this.info);

  }

   public getRestaurants() {
     this.apiRepo.getRestaurants(this.info.lat, this.info.lng).subscribe( data => {
       console.log(data);
     });
   }

}
