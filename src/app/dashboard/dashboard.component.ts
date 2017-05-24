import { BookService } from './../book.service';
import { BookListService } from './../bookList.service';
import { BookList } from './../IBookList';
import { Component, OnInit } from '@angular/core';
import { Book } from './../IBook';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
    lists: BookList[] = new Array<BookList>();
    mostPopularBooks: Book[] = new Array<Book>();

    constructor(
        private bookListService: BookListService,
        private bookService: BookService
    ) { }

    addToMostPopularBooks(books: Book[]): void {
        let me = this;
        books = books.slice(0, 4);
        books.forEach(function(book) {
            me.mostPopularBooks.push(book);
        });
    }

    getMostPopularBooks(list: BookList[]): void {
        let bookList = list.slice(0, 2);
        let me = this;
        bookList.forEach(function(list) {
            me.bookService.getBooks(list.list_name)
              .then(books => me.addToMostPopularBooks(books));
        });
    }

    ngOnInit(): void {
        this.bookListService.getBooks()
            .then(bookLists => this.lists = bookLists.slice(0, 4))
            .then(bookLists => this.getMostPopularBooks(bookLists));
    }
 }
