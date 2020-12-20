import { Routes } from '@angular/router';
import { EditListComponent } from './edit-list/edit-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskViewComponent } from './task-view/task-view.component';


export const PagesRoutes: Routes = [
    { path: '',          component: TaskViewComponent },
    { path: 'lists/:listId', component: TaskViewComponent },
    { path: 'lists', component: TaskViewComponent },
    // { path: 'new-list', component: NewListComponent },
    { path: 'lists/:listId/new-task', component: NewTaskComponent },
    { path: 'edit-list/:listId', component: EditListComponent },
    { path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent },

];
