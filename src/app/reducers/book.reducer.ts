import {IBook} from '../models/book.model';
import {BookActions, bookActionsTypes} from '../actions/book.action';

export interface IBookState {
   results: IBook[];
   searchString: string;
   bookSearched: IBook[];
   selectedBook: IBook | {};
}

export const initialState: IBookState = {
   results: [],
   searchString: '',
   bookSearched: [],
   selectedBook: {}
};

export function bookReducer(state = initialState, action: bookActionsTypes): IBookState {
   switch (action.type) {
      case BookActions.GET_BOOK_LIST_SUCCESS: {
         return {
            ...state,
            results: action.results
         };
      }
      case BookActions.GET_BOOK_BY_ISBN: {
         const selectedBookFromStore = state.results.filter(eachBookFromStore => eachBookFromStore.isbn === action.isbn);
         return {
            ...state,
            selectedBook: [...selectedBookFromStore]
         };
      }
      case BookActions.SEARCH_BOOK: {
         const searchedBookList = state.results.filter((book: IBook) => {
            if (book.title.toLocaleLowerCase().includes(action.searchString)) {
               return book;
            }
         });
         return {
            ...state,
            searchString: action.searchString,
            bookSearched: searchedBookList
         };
      }
      default: {
         return state;
      }
   }
}
