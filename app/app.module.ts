import { NgModule }      from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { BooksModule }  from './books/books.module';

@NgModule({
  imports: [
    routing,
    BooksModule
  ],
  declarations: [ AppComponent ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
