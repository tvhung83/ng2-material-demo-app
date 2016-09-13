import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';

@Injectable()
export class BookService {
	private baseUrl: string = 'http://localhost:10010';
	constructor(private _http: Http) {
	}

	getAll(): Observable<Book[]> {
		let books$ = this._http
			.get(`${this.baseUrl}/books`, { headers: this.getHeaders() })
			.map(mapBooks);
		return books$;
	};

	get(id: number): Observable<Book> {
    let person$ = this._http
      .get(`${this.baseUrl}/books/${id}`, {headers: this.getHeaders()})
      .map(mapBook)
      .catch(handleError);
      return person$;
  }

	private getHeaders() {
		let headers = new Headers();
		headers.append('Aceept', 'application/json');
		return headers;
	}
}

function mapBooks(response: Response) {
	return response.json().books.map(toBook);
}

function toBook(r: any) {
	let book = <Book>({
		id: r.id,
		title: r.title,
		author: r.author,
		description: r.description,
		height: r.height,
	});
	console.log('Parsed book:', book);
	return book;
}

function mapBook(response:Response): Book {
  // toBook looks just like in the previous example
  return toBook(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}