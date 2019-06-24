import {ISideNavState} from '../reducers/sideNav.reducer';
import {IBookState} from '../reducers/book.reducer';
import {ICartState} from '../reducers/cart.reducer';
import {IWishListState} from '../reducers/wishList.reducer';

export interface IAppState {
   sideNav: ISideNavState;
   book: IBookState;
   cart: ICartState;
   wishList: IWishListState;
}
