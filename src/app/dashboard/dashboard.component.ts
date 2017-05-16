import { BookService } from './../book.service';
import { BookListService } from './../bookList.service';
import { BookList } from './../IBookList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
    lists: BookList[] = new Array<BookList>();

    constructor(
        private bookListService: BookListService,
        private bookService: BookService
    ) { }

    ngOnInit(): void {
        this.bookListService.getBooks()
            .then(bookLists => this.lists = bookLists.slice(0, 4));
    }
 }
