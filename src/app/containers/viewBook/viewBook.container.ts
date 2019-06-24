import {Component, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {getBookByIsbn} from '../../actions/book.action';
import {IAppState} from '../../appState/app.state';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {getSelectedBookByIsbn} from '../../selectors/book.selector';
import {IBook} from '../../models/book.model';
import {addToWishList} from '../../actions/wishList.actions';
import {addToCart} from '../../actions/cart.action';

/**
 * Note: Container components are also reusable. Whether or not
 * a component is a presentation component or a container
 * component is an implementation detail.
 *
 * The View Book Page's responsibility is to map router params
 * to a 'Select' book action. Actually showing the selected
 * book remains a responsibility of the
 * SelectedBookPageComponent
 */
@Component({
   selector: 'app-view-book-page',
   template: `
      <app-selected-book-details [book]="selectedBookFromStore" (addToCart)="bookAddToCart($event)"
                                 (addToWishList)="bookAddToWishList($event)"></app-selected-book-details>
   `
})
// tslint:disable-next-line:component-class-suffix
export class ViewBookPageContainer implements OnDestroy {
   private actionsSubscription: Subscription;
   public selectedBookFromStore: IBook | {};

   //
   constructor(private store: Store<IAppState>, route: ActivatedRoute) {
      this.actionsSubscription = route.params.subscribe(routeData => {
         this.selectedId(routeData.id);
      });
   }

   ngOnDestroy() {
      this.actionsSubscription.unsubscribe();
   }

   private selectedId(id: string) {
      this.store.dispatch(getBookByIsbn(id));
      // this.selectedBookFromStore = store.select(getSelectedBookByIsbn);
      this.store.select(getSelectedBookByIsbn).subscribe(data => {
         this.selectedBookFromStore = data[0];
      });
   }

   public bookAddToWishList(book: IBook) {
      this.store.dispatch(addToWishList(book));
   }

   public bookAddToCart(book: IBook) {
      this.store.dispatch(addToCart(book));
   }

   //
   // ngOnDestroy() {
   //    this.actionsSubscription.unsubscribe();
   // }
}
