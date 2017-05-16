import { Book } from './IBook';
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()

export class WantListService {

  // Observable string sources
  private wantConfirmedSource = new Subject<Book>();

  // Observable string streams
  wantConfirmed$ = this.wantConfirmedSource.asObservable();

  // Service message commands
  confirmWant(book: Book) {
    this.wantConfirmedSource.next(book);
  }
}
