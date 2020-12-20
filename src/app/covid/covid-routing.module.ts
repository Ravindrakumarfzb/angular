import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';

export const CovidRoutes: Routes = [
  { path: 'covid',       component: HomeComponent },
  { path: 'edit-profile',          component: CountriesComponent },
  
];
