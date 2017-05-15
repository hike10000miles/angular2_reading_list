import { BookService } from './../book.service';
import { BookList } from './../IBookList';
import { Book } from '../IBook';
import { Component, Input, OnInit, EventEmitter, } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-books',
  templateUrl: './app-books.component.html',
  styleUrls: ['./app-books.component.css'],
})

export class BooksComponent implements OnInit{
  books: Book[];

  @Input() selectedBookList: BookList;

  selectedBook: Book;

  handleAdd(event: Book):void {
    console.log(event);
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBooks(params['name']))
      .subscribe(books => this.books = books);
  }

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  getBooks(listName: string): void {
    this.bookService.getBooks(listName).then(books => this.books = books);
  }
}