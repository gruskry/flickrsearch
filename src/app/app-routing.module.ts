
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContainerComponent } from './shared/container/container.component';

const routes: Routes = [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((module) => module.DashboardModule)},
    { path: 'bookmarks', loadChildren: () => import('./bookmarks/bookmarks.module').then((module) => module.BookmarksModule)},
    { path: '**', redirectTo: '/dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }