import { FormsModule } from '@angular/forms';
import { ApiRepositoryService } from './domain/api-repository.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingModule } from './routing.module';
import { ResultsComponent } from './results/results.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoService } from './domain/info.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResultsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiRepositoryService,
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
