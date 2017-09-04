import { Component, OnInit , TemplateRef} from '@angular/core';
import { BookInterface } from './book';
import { BookService } from './book.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';


@Component({
    moduleId: module.id,
    templateUrl: 'books-list.component.html',
    styleUrls: ['books-list.component.css']
})

export class BookListComponent implements OnInit {
    pageTitle: string = 'Book List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    listFilter: string;
    errorMessage: string;
    books: BookInterface[];
    book:  {};
    public modalRef: BsModalRef;
     
    constructor(private _bookService: BookService ,private modalService: BsModalService) {

    }
    ngOnInit(): void {
        this._bookService.getBooks()
            .subscribe(books => this.books = books,
            error => this.errorMessage = <any>error);
    }
    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }

      // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.book); }  

}