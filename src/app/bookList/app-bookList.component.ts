import { BookList } from './../IBookList';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-bookList',
  templateUrl: './app-bookList.component.html',
  styleUrls: ['./app-bookList.component.css'],
})
export class BookListComponent{
  @Input() bookList: BookList;
}