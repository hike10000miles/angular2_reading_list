import { BookService } from './book.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent {
  Title = "What Should I read next";
  TagLine = "Build a reading list based on New York Times best seller.";
}