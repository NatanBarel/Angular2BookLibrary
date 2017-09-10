import { PipeTransform, Pipe } from '@angular/core';
import { BookInterface } from '../book-model/book';
@Pipe({
    name: 'bookTitleFilter'
})


export class BookTitleFilterPipe implements PipeTransform {

    transform(value: string, filterBy: string): string {

        let cleanString = value.replace(/[|&;$%@"<>()+,]/g, "");
        return cleanString.substr(0,1).toUpperCase() + cleanString.substring(1,cleanString.length);

    }

}

