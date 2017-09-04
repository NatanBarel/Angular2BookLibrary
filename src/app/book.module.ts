import {NgModule} from '@angular/core';
import{FormsModule} from '@angular/forms';
import{CommonModule} from '@angular/common';
import{RouterModule}from '@angular/router';
import{BookDetailComponent} from'./book-detail.component';
import{ BookListComponent } from './books-list.component';
import{ BookFilterPipe } from './book-filter.pipe';
import {BookTitleFilterPipe} from './book-title-filter.pipe'
import{BookService} from './book.service';

@NgModule({
    declarations:[
        BookListComponent, 
        BookFilterPipe,
        BookTitleFilterPipe,
        BookDetailComponent
    ],
    imports: [
        FormsModule,
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