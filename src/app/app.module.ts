import { AppRoutingModule } from './app-routing.module';
import { BookTitlePipe } from './bookTitle.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookListComponent } from './bookList/app-bookList.component';
import { BookListService } from './bookList.service';
import { BookService } from './book.service';
import { BooksComponent } from './books/app-books.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BookComponent } from './book/app-book.component';
import { BookListsComponent } from "app/bookLists/app-bookLists.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    BooksComponent,
    BookListComponent,
    BookListsComponent,
    BookTitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    BookService,
    BookListService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
