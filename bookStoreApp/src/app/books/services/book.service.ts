import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
    "providedIn": "root"
})
export class BookService {

    constructor() { }
    public getBooks(): BookModel[] {
        return [
            {
                "id": 4, "title": 'Secrets of the Nincampoop', "totalPages": 230, "author": 'Rama Pupu',
                "price": { "currency": "USD", "value": 33 }
            },
            {
                "id": 5, "title": 'Make It', "totalPages": 22, "author": 'Tyotay Dora',
                "price": { "currency": "USD", "value": 10 }
            },
            {
                "id": 4, "title": 'Secrets of the Nincampoop', "totalPages": 230, "author": 'Rama Pupu',
                "price": { "currency": "USD", "value": 33 }
            },
            {
                "id": 5, "title": 'Make It', "totalPages": 22, "author": 'Tyotay Dora',
                "price": { "currency": "USD", "value": 10 }
            },
            {
                "id": 4, "title": 'Secrets of the Nincampoop', "totalPages": 230, "author": 'Rama Pupu',
                "price": { "currency": "USD", "value": 33 }
            },
            {
                "id": 5, "title": 'Make It', "totalPages": 22, "author": 'Tyotay Dora',
                "price": { "currency": "USD", "value": 10 }
            },
            {
                "id": 4, "title": 'Secrets of the Nincampoop', "totalPages": 230, "author": 'Rama Pupu',
                "price": { "currency": "USD", "value": 33 }
            },
            {
                "id": 5, "title": 'Make It', "totalPages": 22, "author": 'Tyotay Dora',
                "price": { "currency": "USD", "value": 10 }
            },
            {
                "id": 5, "title": 'Make It', "totalPages": 22, "author": 'Tyotay Dora',
                "price": { "currency": "USD", "value": 10 }
            }

        ];
    }
}
