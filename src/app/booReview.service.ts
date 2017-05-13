import { BookReview } from './IBookReview';
import { element } from 'protractor';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookReviewService {

    private handleError(error) {
        console.log(error);
    }

    private apiEndpoint: string = "https://www.goodreads.com/book/isbn/";

    private apikey: string = "?key=uNaWLvsCjmjb3RWFctBOQ&format=json";

    private booksReview: BookReview;

    constructor(private _http: Http) { }
    
    getBookReview(isbns: string): Promise<BookReview> {
      return this
            ._http
            .get(this.apiEndpoint + isbns + this.apikey)
            .toPromise()
            .then(response => response.json().data as BookReview)
            .catch(this.handleError);
    }
}