import { BookReviewService } from './../booReview.service';
import { BookReview } from './../IBookReview';
import { Component, Input } from '@angular/core';
import {Book} from '../IBook';

@Component({
  selector: 'app-bookReview',
  templateUrl: './app-bookReview.component.html',
  //styleUrls: ['./app-bookReview.component.css']
})
export class BookReviewComponent {
  @Input() book: Book;
  bookReview: BookReview;

  ngOnChanges():void {
    if(this.book) {
      this.getBookReview(this.book.isbns);
    }
  }

  constructor(private bookReviewService: BookReviewService) {
    
  }

  getBookReview(isbns: string): void {
    this.bookReviewService.getBookReview(isbns).then(bookReview => this.bookReview = bookReview);
  }
}
