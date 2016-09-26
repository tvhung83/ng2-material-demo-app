/**
 * Created by hungnguyen on 9/9/16.
 */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  moduleId: module.id,
  selector: 'books-list',
  providers: [ BookService ],
  templateUrl: 'books-list.component.html'
})
export class BooksListComponent implements OnInit {
  books: Observable<Book[]>;
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private _bookService : BookService) { }

  ngOnInit() {
    this.books = this._bookService.getAll();
  }
}
