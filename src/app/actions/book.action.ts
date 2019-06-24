import {Action} from '@ngrx/store';
import {IBook} from '../models/book.model';
import {SearchActions} from './search.action';

export enum BookActions {
   GET_BOOK_LIST = 'GET_BOOK_LIST',
   GET_BOOK_LIST_SUCCESS = 'GET_BOOK_LIST_SUCCESS',
   GET_BOOK_BY_ISBN = 'GET_BOOK_BY_ISBN',
   SEARCH_BOOK = 'SEARCH_BOOK',
   BOOK_LOAD = 'BOOK_LOAD',
   PUSH_BOOK_TO_WISHLIST = 'PUSH_BOOK_TO_WISHLIST',
   PUSH_BOOK_TO_CART = 'PUSH_BOOK_TO_CART',
}

export interface IGetBookListAction extends Action {
   readonly type: BookActions.GET_BOOK_LIST;
}

export interface ISearchBookAction extends Action {
   readonly type: BookActions.SEARCH_BOOK;
   searchString: string;
}

export interface IGetBookListSuccessAction extends Action {
   readonly type: BookActions.GET_BOOK_LIST_SUCCESS;
   results: IBook[];
}

export interface IBookLoadAction extends Action {
   readonly type: BookActions.BOOK_LOAD;
   resultItem: IBook;
}
export interface IGetBookByIsbn extends Action {
   readonly type: BookActions.GET_BOOK_BY_ISBN;
   isbn: string;
}

export const getBookList = (): IGetBookListAction => {
   return {
      type: BookActions.GET_BOOK_LIST
   };
};

export const getBookByIsbn = (isbn: string): IGetBookByIsbn => {
   return {
      type: BookActions.GET_BOOK_BY_ISBN,
      isbn
   };
};

export const searchBook = (searchString: string): ISearchBookAction => {
   return {
      type: BookActions.SEARCH_BOOK,
      searchString
   };
};

export const getBookListSuccess = (results: IBook[]): IGetBookListSuccessAction => {
   return {
      type: BookActions.GET_BOOK_LIST_SUCCESS,
      results
   };
};

//
// export const searchCompleteAction = (results: Array<IBook>): ISearchCompleteAction => {
//    return {
//       type: BookActions.BOOK_SEARCH_COMPLETE,
//       results
//    };
// };
//
// export const bookLoadAction = (singleBook: IBook): IBookLoadAction => {
//    return {
//       type: BookActions.BOOK_LOAD,
//       resultItem: singleBook
//    };
// };
//
// export const selectAction = (select: string): ISelectAction => {
//    return {
//       type: BookActions.SELECT,
//       select
//    };
// };

export type bookActionsTypes = IGetBookByIsbn | IGetBookListAction | IGetBookListSuccessAction | ISearchBookAction | IBookLoadAction;
