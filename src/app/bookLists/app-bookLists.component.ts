import { BookListService } from './../bookList.service';
import { BookList } from './../IBookList';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-bookLists',
  templateUrl: './app-bookLists.component.html',
  styleUrls: ['./app-bookLists.component.css'],
})
export class BookListsComponent implements OnInit{
  lists: BookList[];

  selectedBookList: BookList;

  ngOnInit(): void {
    this.getBookLists();
  }

  constructor(private bookListService: BookListService) {

   }

  onSelect(bookList: BookList): void {
    this.selectedBookList = bookList;
  }

  getBookLists(): void {
    this.bookListService.getBooks().then(bookLists => this.lists = bookLists);
  }
}