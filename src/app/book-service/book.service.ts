import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { BookInterface } from '../book-model/book';

@Injectable()
export class BookService {
    private _bookUrl = 'assets/books.json';

    constructor(private _http: Http) { }

    getBooks(): Observable<BookInterface[]> {
        return this._http.get(this._bookUrl)
            .map((response: Response) => <BookInterface[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getBook(id: number): Observable<BookInterface> {
        return this.getBooks()
            .map((books: BookInterface[]) => books.find(b => b.bookId === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}