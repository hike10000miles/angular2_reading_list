import { element } from 'protractor';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BookList } from './IBookList';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookListService {

    private handleError(error) {
        console.log(error);
    }

    private apiEndpoint: string = "https://api.nytimes.com/svc/books/v3/lists/names.json?";

    private apikey: string = "api-key=130b1d07601d45f0a33c43da77d00461";

    private bookLists: BookList[];

    constructor(private _http: Http) { }

    processData(data):BookList[] {
      let arry: BookList[] = new Array<BookList>();
      data.results.forEach(element => {
        let list: BookList = new BookList();
        list.list_name = element['list_name'];
        list.list_name_encoded = element['list_name_encoded'];
        list.newest_published_date = element['newest_published_date'];
        list.updated = element['updated'];
        arry.push(list);
      });
      return arry;
    }
    
    getBooks(): Promise<BookList[]> {
      return this
            ._http
            .get(this.apiEndpoint + this.apikey)
            .toPromise()
            .then(response => this.processData(response.json()))
            .catch(this.handleError);
    }
}