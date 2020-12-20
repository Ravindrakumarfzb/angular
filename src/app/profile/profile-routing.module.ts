import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';

export const ProfileRoutes: Routes = [
  { path: 'profile',       component: ProfileComponent },
  { path: 'edit-profile',          component: EditProfileComponent },
  
];
