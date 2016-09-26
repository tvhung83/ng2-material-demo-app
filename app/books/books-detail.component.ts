import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
    moduleId: module.id,
    selector: 'books-detail',
    providers: [BookService],
    templateUrl: 'books-detail.component.html'
})
export class BooksDetailComponent implements OnInit, OnDestroy {
    book: Book;
    private sub: Subscription;
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _bookService: BookService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this._bookService.get(id).subscribe(
                (book) => this.book = book,
                (err) => this.errorMessage = err,
                () => this.isLoading = false);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
