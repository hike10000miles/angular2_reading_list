import { BooksComponent } from './books/app-books.component';
import { BookListsComponent } from 'app/bookLists/app-bookLists.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
      {
        path: 'index',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
      },
      {
        path: 'allLists',
        component: BookListsComponent
      },
      {
        path: 'list/:name',
        component: BooksComponent
      },
    ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}