import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutes } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ProfileComponent, EditProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
  ]
})
export class ProfileModule { }
