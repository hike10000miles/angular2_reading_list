import { BookService } from './../book.service';
import { BookListService } from './../bookList.service';
import { BookList } from './../IBookList';
import { Book } from './../IBook';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-bookLists',
  templateUrl: './app-bookLists.component.html',
  styleUrls: ['./app-bookLists.component.css'],
})
export class BookListsComponent implements OnInit{
  lists: BookList[];

  listsOnDisplay: BookList[];

  selectedBookList: BookList;

  books: Book[];

  ngOnInit(): void {
    this.getBookLists();
  }

  constructor(
    private bookListService: BookListService,
    private bookService: BookService
  ) { }

  onSelect(bookList: BookList): void {
    this.selectedBookList = bookList;
    this.bookService.getBooks(this.selectedBookList.list_name).then(books => this.books = books.slice(0, 4));
  }

  nextSixLists(): void {
    let numberOfLists = this.lists.length;
    let lastList = this.listsOnDisplay[this.listsOnDisplay.length - 1];
    let index = this.lists.indexOf(lastList);
    if ((index + 1) < numberOfLists ) {
      this.listsOnDisplay = this.lists.slice(index + 1, index + 7);
    }
  }

  previousSixLists(): void {
    let firstList =  this.listsOnDisplay[0];
    let index = this.lists.indexOf(firstList);
    if(index > 0) {
      this.listsOnDisplay = this.lists.slice(index - 6, index);
    }
  }

  getBookLists(): void {
    this.bookListService.getBooks().then(bookLists => this.lists = bookLists).then(bookLists => this.listsOnDisplay = bookLists.slice(0,6));
  }
}