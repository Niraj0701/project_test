import {IBook} from '../models/book.model';
import {cartActions, CartActionsTypes} from '../actions/cart.action';
import {IOffer} from '../models/offer.model';

export interface ICartState {
   cartList: IBook[];
   books: IBook[];
   offers: Array<IOffer>;
}

export const initialState: ICartState = {
   cartList: [],
   books: [],
   offers: []
};

export function cartReducer(state = initialState, action: cartActions): ICartState {
   switch (action.type) {

      case CartActionsTypes.ADD_TO_CART: {
         return {
            ...state,
            cartList: [...state.cartList, action.book]
         };
      }

      case CartActionsTypes.PUT_OFFERS: {
         return {
            ...state,
            offers: action.offers
         };
      }
      case CartActionsTypes.REMOVE_FROM_CART: {
         const remainingCartList = state.cartList
            .filter((singleBook: IBook) => singleBook.isbn !== action.book.isbn);
         return {
            ...state,
            cartList: remainingCartList
         };
      }
      default: {
         return state;
      }
   }
}

