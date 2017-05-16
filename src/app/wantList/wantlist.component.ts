import { Book } from './../IBook';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-wantlist',
  templateUrl: './wantlist.component.html',
  styleUrls: ['./wantlist.component.css'],
})

export class WantListComponent {

    @Input() wantList: Book[];

    deleteFromList(book: Book): void {
        let index = this.wantList.indexOf(book);
        this.wantList.splice(index, 1);
    }
}