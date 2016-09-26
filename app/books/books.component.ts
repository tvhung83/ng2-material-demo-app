import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
    selector: 'books',
  	styleUrls: ['books.component.css'],
    template: `
        <md-toolbar color="primary">
            Books
        </md-toolbar>
        <!-- Routed views go here -->
        <router-outlet></router-outlet>
    `
})
export class BooksComponent { }
