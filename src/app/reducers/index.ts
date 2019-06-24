import {sideNaveReducer} from './sideNav.reducer';
import {ActionReducerMap} from '@ngrx/store/src/models';
import {IAppState} from '../appState/app.state';
import {bookReducer} from './book.reducer';
import {cartReducer} from './cart.reducer';
import {wishListReducer} from './wishList.reducer';

export const allReducers: ActionReducerMap<IAppState> = {
   sideNav: sideNaveReducer,
   book: bookReducer,
   cart: cartReducer,
   wishList: wishListReducer
};
