import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../../appState/app.state';
import {getListOfBooks, getListOfSearchedBooks, getSearchString} from '../../selectors/book.selector';
import {IBook} from '../../models/book.model';
import {getBookList, searchBook} from '../../actions/book.action';
import {addToWishList} from '../../actions/wishList.actions';
import {addToCart} from '../../actions/cart.action';


@Component({
   selector: 'app-search-container',
   changeDetection: ChangeDetectionStrategy.OnPush,
   styleUrls: ['./book.container.scss'],
   template: `
      <div class="searchSection">
         <app-search [inputString]="searchQuery | async" (search)="searchBookInList($event)"></app-search>
      </div>
      <div class="bookListSection" *ngIf="bookList && (searchQuery| async).length === 0 ">
         <app-book-list [booksLists]="bookList | async" (addToCart)="bookAddToCart($event)"
                        (addToWishList)="bookAddToWishList($event)"></app-book-list>
      </div>
      <div *ngIf="bookListSearched && (searchQuery| async).length > 0 ">
         <app-book-list [booksLists]="bookListSearched | async"
                        (addToCart)="bookAddToCart($event)" (addToWishList)="bookAddToWishList($event)"></app-book-list>
      </div>
   `
})
// tslint:disable-next-line:component-class-suffix
export class BookListContainer implements OnInit {

   public bookList: Observable<Array<IBook>>;
   public bookListSearched: Observable<Array<IBook>>;
   public searchQuery: Observable<string>;

   constructor(private store: Store<IAppState>) {
      this.bookList = store.select(getListOfBooks);
      this.searchQuery = store.select(getSearchString);
      this.bookListSearched = store.select(getListOfSearchedBooks);
      this.bookListSearched.subscribe(data => {
      });
   }

   ngOnInit() {
      this.store.dispatch(getBookList());
   }

   searchBookInList(stringValue: string) {
      this.store.dispatch(searchBook(stringValue));
   }

   public bookAddToWishList(book: IBook) {
      this.store.dispatch(addToWishList(book));
   }

   public bookAddToCart(book: IBook) {
      this.store.dispatch(addToCart(book));
   }
}
