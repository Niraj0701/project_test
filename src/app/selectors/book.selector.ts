import {IAppState} from '../appState/app.state';
import {createSelector} from '@ngrx/store';
import {IBookState} from '../reducers/book.reducer';

const getSearchState = (state: IAppState) => state.book;

export const getListOfBooks = createSelector(getSearchState, (state: IBookState) => state.results );
export const getSearchString = createSelector(getSearchState, (state: IBookState) => state.searchString );
export const getListOfSearchedBooks = createSelector(getSearchState, (state: IBookState) => state.bookSearched );
export const getSelectedBookByIsbn = createSelector(getSearchState, (state: IBookState) => state.selectedBook );
