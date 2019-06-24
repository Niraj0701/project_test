import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {BooksApiService} from '../services/bookApi.service';
import {BookActions, IGetBookListAction} from '../actions/book.action';
import {IGetOffers} from '../actions/cart.action';

@Injectable()
export class BookEffects {

   constructor(private bookActions: Actions, private bookApiService: BooksApiService) {
   }

   @Effect()
   bookList = this.bookActions.pipe(
      ofType<IGetBookListAction>(BookActions.GET_BOOK_LIST),
      mergeMap(() => this.bookApiService.getAllBooks()
         .pipe(map((data) => {
               return {type: BookActions.GET_BOOK_LIST_SUCCESS, results: data};
            }), catchError(() => EMPTY)
         ))
   );

}
