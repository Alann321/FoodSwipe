import { ApiRepositoryService } from './../domain/api-repository.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private apiRepo: ApiRepositoryService
  ) { }

  ngOnInit() {
  }

  public getLocation() {
    console.log('this works');
    this.apiRepo.getLocation('Dallas').subscribe(data => {
      console.log(data);
    });
  }


}
