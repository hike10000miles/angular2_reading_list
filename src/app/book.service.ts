import { element } from 'protractor';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Book } from './IBook';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {

    private handleError(error) {
        console.log(error);
    }

    private apiEndpoint: string = "https://api.nytimes.com/svc/books/v3/lists.json?";

    private apikey: string = "api-key=130b1d07601d45f0a33c43da77d00461";

    private books: Book[];

    constructor(private _http: Http) { }

    processData(data):Book[] {
      let arry: Book[] = new Array<Book>();
      data.results.forEach(element => {
        let book: Book = new Book();
        book.author = element['book_details'][0]['author'];
        book.rank = element['rank'];
        book.description = element['book_details'][0]['description'];
        book.isbns = element['book_details'][0]['primary_isbn13'];
        book.title = element['book_details'][0]['title'];
        book.url = element['amazon_product_url'];
        arry.push(book);
      });
      return arry;
    }
    
    getBooks(listName: string): Promise<Book[]> {
      return this
            ._http
            .get(this.apiEndpoint + this.apikey + "&list=" + listName)
            .toPromise()
            .then(response => this.processData(response.json()))
            .catch(this.handleError);
    }
}