import {Action} from '@ngrx/store';
import {IBook} from '../models/book.model';

export enum SearchActions {
   SEARCH = 'SEARCH',
   SEARCH_COMPLETE = 'SEARCH_COMPLETE',
   SEARCH_ATTEMPT = 'SEARCH_ATTEMPT',
   BOOK_LOAD = 'BOOK_LOAD',
   SELECT = 'SELECT',
}

export interface ISearchAction extends Action {
   readonly type: SearchActions.SEARCH;
   searchString: string;
}

export interface ISearchCompleteAction extends Action {
   readonly type: SearchActions.SEARCH_COMPLETE;
   results: Array<IBook>;
}

export interface IBookLoadAction extends Action {
   readonly type: SearchActions.BOOK_LOAD;
   resultItem: IBook;
}

export interface ISelectAction extends Action {
   readonly type: SearchActions.SELECT;
   select: string;
}

export const searchAction = (searchString: string): ISearchAction => {
   return {
      type: SearchActions.SEARCH,
      searchString
   };
};

export const searchCompleteAction = (results: Array<IBook>): ISearchCompleteAction => {
   return {
      type: SearchActions.SEARCH_COMPLETE,
      results
   };
};

export const bookLoadAction = (singleBook: IBook): IBookLoadAction => {
   return {
      type: SearchActions.BOOK_LOAD,
      resultItem: singleBook
   };
};

export const selectAction = (select: string): ISelectAction => {
   return {
      type: SearchActions.SELECT,
      select
   };
};

export type searchActionsTypes = ISearchAction |
   ISearchCompleteAction |
   IBookLoadAction |
   ISelectAction ;
