import { BookReviewComponent } from './bookReview/app-bookReview.component';
import { BookReviewService } from './booReview.service';
import { BookReview } from './IBookReview';
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

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    BookListComponent,
    BookListsComponent,
    BookReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BookService,
    BookListService,
    BookReviewService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
