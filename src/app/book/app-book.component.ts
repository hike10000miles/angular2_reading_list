import { Component, Input } from '@angular/core';
import {Book} from '../IBook';

@Component({
  selector: 'app-book',
  templateUrl: './app-book.component.html',
  styleUrls: ['./app-book.component.css']
})
export class BookComponent {
  @Input() book: Book;
}
