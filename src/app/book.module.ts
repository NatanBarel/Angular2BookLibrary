import {NgModule} from '@angular/core';
import{FormsModule , ReactiveFormsModule } from '@angular/forms';
import{CommonModule} from '@angular/common';
import{RouterModule}from '@angular/router';
import{BookDetailComponent} from'./book-detail/book-detail.component';
import{ BookListComponent } from './book-list/books-list.component';
import{ BookFilterPipe } from './book-filters/book-filter.pipe';
import {BookTitleFilterPipe} from './book-filters/book-title-filter.pipe'
import{BookService} from './book-service/book.service';

@NgModule({
    declarations:[
        BookListComponent, 
        BookFilterPipe,
        BookTitleFilterPipe,
        BookDetailComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
               {path:'books', component: BookListComponent},
    {path:'book/:id', component: BookDetailComponent},

        ])
    ],
    providers:[
        BookService,
    ]


})
export class BookModule {

}