import {IBook} from '../models/book.model';
import {wishListActions, WishListActionsTypes} from '../actions/wishList.actions';

export interface IWishListState {
   wishList: IBook[];
}

const initialState: IWishListState = {
   wishList: []
};

export function wishListReducer(state = initialState, action: wishListActions): IWishListState {
   switch (action.type) {
      case WishListActionsTypes.ADD_TO_WISHLIST: {
         return {
            ...state,
            wishList: [...state.wishList, action.book]
         };
      }
      case WishListActionsTypes.REMOVE_FROM_WISHLIST: {
         const remainingWishList = state.wishList
            .filter((singleBook: IBook) => singleBook.isbn !== action.book.isbn);
         return {
            ...state,
            wishList: remainingWishList
         };
      }
      default: {
         return state;
      }
   }
}

