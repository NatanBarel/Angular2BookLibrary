import { PipeTransform, Pipe } from '@angular/core';
import { BookInterface } from '../book-model/book';
@Pipe({
    name: 'bookFilter'
})


export class BookFilterPipe implements PipeTransform {

    transform(value: BookInterface[], filterBy: string): BookInterface[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((book: BookInterface) =>
            book.bookTitle.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }

}

