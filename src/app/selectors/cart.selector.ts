import {IAppState} from '../appState/app.state';
import {createSelector} from '@ngrx/store';
import {ICartState} from '../reducers/cart.reducer';

const getCartState = (state: IAppState) => state.cart;

export const getCartBookList = createSelector(getCartState, (state: ICartState) => state.cartList );
export const getCartOffers = createSelector(getCartState, (state: ICartState) =>  state.offers);
