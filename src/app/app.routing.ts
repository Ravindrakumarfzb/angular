import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

const routes: Routes =[


  {
    path: '',
    component: AuthLayoutComponent,
    children: [{ 
      path: '', 
      redirectTo: 'login', 
      pathMatch: 'full' 
    },
    {
      path: "login",
      loadChildren: "./authentication/authentication.module#AuthenticationModule"
    },
  ],
  
  },

  {
    path: '',
    redirectTo: 'lists',
    pathMatch: 'full',
  }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: '',
        loadChildren: "./profile/profile.module#ProfileModule"
      },
      {
        path: '',
        loadChildren: "./covid/covid.module#CovidModule"
      },
      {
        path: '',
        loadChildren: "./pages/pages.module#PagesModule"
      }
      
    ]
  }, 
  
  // { path: '', redirectTo: '/lists', pathMatch: 'full' },
  // { path: 'new-list', component: NewListComponent },
  // { path: 'edit-list/:listId', component: EditListComponent },
  // { path: 'lists', component: TaskViewComponent },
  // { path: 'lists/:listId', component: TaskViewComponent },
  // { path: 'lists/:listId/new-task', component: NewTaskComponent },
  // { path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
