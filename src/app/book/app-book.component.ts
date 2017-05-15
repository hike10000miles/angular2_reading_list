import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../IBook';

@Component({
  selector: 'app-book',
  templateUrl: './app-book.component.html',
  styleUrls: ['./app-book.component.css']
})
export class BookComponent {
  @Input() book: Book;
  @Output() addtowant: EventEmitter<Book> = new EventEmitter<Book>();

  addToWant(): void {
    this.addtowant.emit(this.book);
  }
}
