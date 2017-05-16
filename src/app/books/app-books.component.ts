import { WantListService } from './../want.service';
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

  latestListDate: string;

  listDate: string;

  @Input() selectedBookList: BookList;

  selectedBook: Book;

  handleAdd(event: Book): void {
    this.wantListServie.confirmWant(event);
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBooks(params['name']))
      .subscribe(books => this.setInitialDetail(books));
  }

  getLastWeekList(): void {
    let dateStr = new Date(this.listDate).valueOf() + 24 * 60 * 60 * 1000;
    let lastWeekListDateStr = dateStr - 8 * 24 * 60 * 60 * 1000;
    let date = new Date(lastWeekListDateStr).toISOString().split('T')[0];
    this.route.params
      .switchMap((params: Params) => this.bookService.getListByDate(params['name'], date))
      .subscribe(books => this.setListDetail(books));
  }

  getNextWeekList(): void {
    let dateStr = new Date(this.listDate).valueOf() + 24 * 60 * 60 * 1000;
    let nextWeekListDateStr = dateStr + 6 * 24 * 60 * 60 * 1000;
    let date = new Date(nextWeekListDateStr).toISOString().split('T')[0];
    this.route.params
      .switchMap((params: Params) => this.bookService.getListByDate(params['name'], date))
      .subscribe(books => this.setListDetail(books));
  }

  private setListDetail(books: Book[]):void {
    this.books = books;
    this.listDate = books[0]['published_date'];
  }

  private setInitialDetail(books: Book[]): void {
    this.setListDetail(books);
    this.latestListDate = this.listDate;
  }

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
    private wantListServie: WantListService
  ) { }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
}