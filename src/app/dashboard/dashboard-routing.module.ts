import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../page/dashboard/dashboard.component';
import { IconsComponent } from '../page/icons/icons.component';
import { MapsComponent } from '../page/maps/maps.component';
import { TablesComponent } from '../page/tables/tables.component';

export const DashboardRoutes: Routes = [
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'tables',         component: TablesComponent },
  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent }
];
