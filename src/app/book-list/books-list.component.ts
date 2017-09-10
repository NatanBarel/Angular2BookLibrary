import { Component, OnInit, TemplateRef } from '@angular/core';
import { BookInterface } from '../book-model/book';
import { BookService } from '../book-service/book.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
    templateUrl: 'books-list.component.html',
    styleUrls: ['books-list.component.css']
})

export class BookListComponent implements OnInit {
    pageTitle: string = 'Book List';
    imageWidth: number = 100;
    imageMargin: number = 2;
    listFilter: string;
    errorMessage: string;
    form: FormGroup;
    books: BookInterface[];
    public modalRefEditBookForm: BsModalRef;
    public modalRefDeleteBookPrompt: BsModalRef;

    constructor(private _bookService: BookService, private modalService: BsModalService) {

    }
    ngOnInit(): void {
        this._bookService.getBooks()
            .subscribe(books => this.books = books,
            error => this.errorMessage = <any>error);
    
    }

    public openFormModal(book, template: TemplateRef<any>) {
        this.form = new FormGroup({
            bookId: new FormControl(book.bookId),
            bookTitle: new FormControl(book.bookTitle, Validators.required),
            author: new FormControl(book.author, Validators.required),
            datePublished: new FormControl(book.datePublished, Validators.required),
            imageUrl: new FormControl(book.imageUrl)
        });

        this.modalRefEditBookForm = this.modalService.show(template);
    }

    public DeleteBookPrompt(template: TemplateRef<any>) {
        this.modalRefDeleteBookPrompt = this.modalService.show(template);
    }

    public DeleteBook(bookId) {
        let BookIndex = this.books.map(function (item) { return item.bookId; })
            .indexOf(bookId);
        this.books.splice(BookIndex, 1);
        this.modalRefDeleteBookPrompt.hide();
    }

    onSubmit(formValue): void {
        console.log(formValue);
        let BookIndex = this.books.map(function (item) { return item.bookId; })
        .indexOf(formValue.bookId);
        this.books.splice(BookIndex,1,formValue);
        this.modalRefEditBookForm.hide();
    }

}