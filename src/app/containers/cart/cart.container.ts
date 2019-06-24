import {Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../appState/app.state';
import {Observable} from 'rxjs';
import {IBook} from '../../models/book.model';
import {getListOfBooks} from '../../selectors/book.selector';
import {
   getCartBookList
} from '../../selectors/cart.selector';
import {getOffer, removeFromCart} from '../../actions/cart.action';


@Component({
   selector: 'app-cart',
   styleUrls: ['./cart.container.scss'],
   template: `
            <div class="cartBookListSection">
               <app-book-list class="cartBookList" [inCartCollection]="true" [booksLists]="cartBookList"
                              (removeBookFromCart)="removeFormCart($event)"></app-book-list>
            </div>
            <div class="cartBookListPriceSection">
               <app-cart-price *ngIf="cartBookList.length > 0" [bookList]="cartBookList"></app-cart-price>
            </div>
   `
})
// tslint:disable-next-line:component-class-suffix
export class CartContainer implements OnInit {

   public cartBookList: Array<IBook>;

   constructor(private store: Store<IAppState>, private changeDetector: ChangeDetectorRef) {
   }

   ngOnInit() {
      this.store.select(getCartBookList).subscribe(bookList => {
         this.cartBookList = bookList;
      });
   }

   removeFormCart(book: IBook) {
      this.store.dispatch(removeFromCart(book));
   }
}
