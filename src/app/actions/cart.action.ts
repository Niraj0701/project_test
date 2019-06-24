import {Action} from '@ngrx/store';
import {IBook} from '../models/book.model';

export enum CartActionsTypes {
   GET_CART_LIST = 'GET_CART_LIST',
   ADD_TO_CART = 'ADD_TO_CART',
   REMOVE_FROM_CART = 'REMOVE_FROM_CART',
   CALCULATE_OFFER_PRICE = 'CALCULATE_OFFER_PRICE',
   PUT_OFFERS = 'PUT_OFFERS',
   GET_OFFER = 'GET_OFFER',
}


export interface IGetCartList extends Action {
   readonly type: CartActionsTypes.GET_CART_LIST;
}

export interface IPutOffersToCart extends Action {
   readonly type: CartActionsTypes.PUT_OFFERS;
   offers: any;
}

export interface IGetOffers extends Action {
   readonly type: CartActionsTypes.GET_OFFER;
   books: IBook[];
}

export interface IAddToCartAction extends Action {
   readonly type: CartActionsTypes.ADD_TO_CART;
   book: IBook;
}

export interface IRemoveFromCartAction extends Action {
   readonly type: CartActionsTypes.REMOVE_FROM_CART;
   book: IBook;
}

// tslint:disable-next-line:no-shadowed-variable
export const getCartList = (): IGetCartList => {
   return {
      type: CartActionsTypes.GET_CART_LIST,
   };
};

// tslint:disable-next-line:no-shadowed-variable
export const putOffersToCart = (data: any): IPutOffersToCart => {
   return {
      type: CartActionsTypes.PUT_OFFERS,
      offers: data
   };
};

// tslint:disable-next-line:no-shadowed-variable
export const addToCart = (book: IBook): IAddToCartAction => {
   return {
      type: CartActionsTypes.ADD_TO_CART,
      book
   };
};

export const getOffer = (books: IBook[]): IGetOffers => {
   return {
      type: CartActionsTypes.GET_OFFER,
      books
   };
};


// tslint:disable-next-line:no-shadowed-variable
export const removeFromCart = (book: IBook): IRemoveFromCartAction => {
   return {
      type: CartActionsTypes.REMOVE_FROM_CART,
      book
   };
};

export type cartActions = IRemoveFromCartAction | IAddToCartAction | IPutOffersToCart | IGetOffers | IGetCartList;
