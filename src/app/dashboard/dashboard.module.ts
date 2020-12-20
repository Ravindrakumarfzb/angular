import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutes } from './dashboard-routing.module';
import { DashboardComponent } from '../page/dashboard/dashboard.component';
// import { UserProfileComponent } from '../pages/user-profile/user-profile.component';
import { TablesComponent } from '../page/tables/tables.component';
import { IconsComponent } from '../page/icons/icons.component';
import { MapsComponent } from '../page/maps/maps.component';


@NgModule({
  declarations: [DashboardComponent,
    // UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ]
})
export class DashboardModule { }
