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
  constructor(
    private apiRepo: ApiRepositoryService,
    protected httpClient: HttpClient,
    private infoService: InfoService
  ) { }


  ngOnInit() {
    this.info = this.infoService.getInfo();

  }

  // public getRestaurants()

}
