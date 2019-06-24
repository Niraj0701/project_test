import {Action} from '@ngrx/store';
import {IBook} from '../models/book.model';

export enum WishListActionsTypes {
   GET_WISHLIST = 'GET_WISHLIST',
   ADD_TO_WISHLIST = 'ADD_TO_WISHLIST',
   REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'
}


export interface IGetWishList extends Action {
   readonly type: WishListActionsTypes.GET_WISHLIST;
}

export interface IAddToWishListAction extends Action {
   readonly type: WishListActionsTypes.ADD_TO_WISHLIST;
   book: IBook;
}

export interface IRemoveFromWishListAction extends Action {
   readonly type: WishListActionsTypes.REMOVE_FROM_WISHLIST;
   book: IBook;
}

// tslint:disable-next-line:no-shadowed-variable
export const getWishList = (): IGetWishList => {
   return {
      type: WishListActionsTypes.GET_WISHLIST,
   };
};

// tslint:disable-next-line:no-shadowed-variable
export const addToWishList = (book: IBook): IAddToWishListAction => {
   return {
      type: WishListActionsTypes.ADD_TO_WISHLIST,
      book
   };
};

// tslint:disable-next-line:no-shadowed-variable
export const removeFromWishList = (book: IBook): IRemoveFromWishListAction => {
   return {
      type: WishListActionsTypes.REMOVE_FROM_WISHLIST,
      book
   };
};

export type wishListActions = IRemoveFromWishListAction | IAddToWishListAction;
