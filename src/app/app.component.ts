import { WantListService } from './want.service';
import { Book } from './IBook';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
  Title = 'What Should I read next?';
  TagLine = 'Build a reading list based on New York Times best seller.';
  wantList: Book[] = new Array<Book>();
  showWantList: boolean = false;

  toggleWantList(): void {
    this.showWantList = !this.showWantList;
  }

  constructor(private wantListService: WantListService) {
    wantListService.wantConfirmed$.subscribe(
      book => {
        this.wantList.push(book);
      }
    );
  }
}