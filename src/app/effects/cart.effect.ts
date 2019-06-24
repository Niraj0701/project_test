import {Injectable} from '@angular/core';
import {Effect, ofType, Actions} from '@ngrx/effects';
import {filter, map, mergeMap, startWith, switchMap, withLatestFrom} from 'rxjs/operators';
import {BooksApiService} from '../services/bookApi.service';
import {CartActionsTypes, IGetOffers, putOffersToCart} from '../actions/cart.action';
import {Store} from '@ngrx/store';
import {IAppState} from '../appState/app.state';
import {pipe} from 'rxjs';

@Injectable()
export class CartEffects {

   constructor(private cartActions: Actions,
               private bookApiService: BooksApiService,
               private store: Store<IAppState>) {
   }

   @Effect()
   getDiscountOffers = this.cartActions.pipe(
      ofType<IGetOffers>(CartActionsTypes.GET_OFFER),
      pipe(
         map(action => action.books
         ),
         switchMap(books => {
            this.bookApiService.getOfferForBooks(books).subscribe(gotOffers => {
               this.store.dispatch({
                  type: CartActionsTypes.PUT_OFFERS,
                  offers: gotOffers.offers
               });
            });
            return [];
         })
      )
   );
}
