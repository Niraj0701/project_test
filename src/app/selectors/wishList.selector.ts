import {IAppState} from '../appState/app.state';
import {createSelector} from '@ngrx/store';
import {IWishListState} from '../reducers/wishList.reducer';

const getWishListState = (state: IAppState) => state.wishList;

export const getWishListBookList = createSelector(getWishListState, (state: IWishListState) => state.wishList );
