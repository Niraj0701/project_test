import {Injectable} from '@angular/core';
import {IBook} from '../models/book.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BooksApiService {
   private API_PATH = 'http://henri-potier.xebia.fr/books';
   private OFFER_PRICE_API_PATH = 'http://henri-potier.xebia.fr/books/';

   constructor(private http: HttpClient) {
   }

   getAllBooks(): Observable<any> {
      return this.http.get(`${this.API_PATH}`);
   }

   getOfferForBooks(bookListFromCart: IBook[]): Observable<any> {
      const booksIsbnArray: string[] = bookListFromCart.map(singleBook => singleBook.isbn);

      const url = this.OFFER_PRICE_API_PATH + booksIsbnArray.toString() + '/commercialOffers';
      return this.http.get(url);
   }
}
