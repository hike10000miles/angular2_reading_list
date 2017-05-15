import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'bookTitle'})
export class BookTitlePipe implements PipeTransform {
  transform(value: string): string {
    let arr = value.split(" ");
    let newArr = [];
    arr.forEach(function(element) {
        let str = element.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.slice(1);
        newArr.push(str);
    })
    return newArr.join(" ");
  }
}