import { BookService } from './../book.service';
import { BookList } from './../IBookList';
import { Book } from '../IBook';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './app-books.component.html',
  styleUrls: ['./app-books.component.css'],
})
export class BooksComponent implements OnInit{
  books: Book[];

  @Input() selectedBookList: BookList;

  selectedBook: Book;

  ngOnChanges():void {
    if(this.selectedBookList) {
      this.getBooks(this.selectedBookList.list_name_encoded);
    }
  }

  ngOnInit(): void {
    
  }

  constructor(private bookService: BookService) {
    
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  getBooks(listName: string): void {
    this.bookService.getBooks(listName).then(books => this.books = books);
  }
}