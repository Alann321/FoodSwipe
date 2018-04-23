import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingModule } from './routing.module';
import { ResultsComponent } from './results/results.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ResultsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
