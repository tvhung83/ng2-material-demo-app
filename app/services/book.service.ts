import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

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
		let book$ = this._http
			.get(`${this.baseUrl}/books/${id}`, { headers: this.getHeaders() })
			.map(mapBook)
			.do(data => console.log('server data:', data))  // debug
			.catch(handleError);
		return book$;
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
		description: r.description
	});
	return book;
}

function mapBook(response: Response): Book {
	// toBook looks just like in the previous example
	return toBook(response.json());
}

// this could also be a private method of the component class
function handleError(err: any) {
	console.error('sever error:', err);  // debug
	if (err instanceof Response) {
		// return Observable.throw(err.json().error || 'backend server error');
		// if you're using lite-server, use the following line
		// instead of the line above:
		return Observable.throw(err.text() || 'backend server error');
	}
	return Observable.throw(err || 'backend server error');
}