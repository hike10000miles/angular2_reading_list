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

    private apiEndpoint = 'https://api.nytimes.com/svc/books/v3/lists.json?';

    private apikey = "api-key=130b1d07601d45f0a33c43da77d00461";

    private books: Book[];

    constructor(private _http: Http) { }

    private processData(data):Book[] {
      let arry: Book[] = new Array<Book>();
      data.results.forEach(element => {
        let book: Book = new Book();
        book.enter_list_date = element['bestsellers_date'];
        book.author = element['book_details'][0]['author'];
        book.rank = element['rank'];
        book.description = element['book_details'][0]['description'];
        book.isbns = element['book_details'][0]['primary_isbn13'];
        book.title = element['book_details'][0]['title'];
        book.url = element['amazon_product_url'];
        book.imgUrl = 'https://s1.nyt.com/du/books/images/' + element['book_details'][0]['primary_isbn13'] + '.jpg';
        book.published_date = element['published_date'];
        book.rank_last_week = element['rank_last_week'];
        arry.push(book);
      });
      return arry;
    }

    private getDate(data): string {
      return data.results[0]['published_date'];
    }
    
    getBooks(listName: string): Promise<Book[]> {
      return this
            ._http
            .get(this.apiEndpoint + this.apikey + "&list=" + listName)
            .toPromise()
            .then(response => this.processData(response.json()))
            .catch(this.handleError);
    }

    getListByDate(listName: string, date: string): Promise<Book[]> {
      return this
      ._http
      .get(this.apiEndpoint + this.apikey + "&list=" + listName + "&published-date=" + date)
      .toPromise()
      .then(response => this.processData(response.json()))
      .catch(this.handleError);
    }
}