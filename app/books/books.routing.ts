import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list.component';
import { BooksDetailComponent } from './books-detail.component';

const booksRoutes: Routes = [
    {
        path: 'books',
        component: BooksComponent,
        children: [
            { path: '', component: BooksListComponent },
            { path: ':id', component: BooksDetailComponent }
        ]
    }
];

export const booksRouting: ModuleWithProviders = RouterModule.forChild(booksRoutes);