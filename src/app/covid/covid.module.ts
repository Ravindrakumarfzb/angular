import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { CovidRoutes } from './covid-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CountriesComponent, HomeComponent, DashboardCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    GoogleChartsModule,
    RouterModule.forChild(CovidRoutes),
  ]
})
export class CovidModule { }
