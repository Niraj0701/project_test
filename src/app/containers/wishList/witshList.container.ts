import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IBook} from '../../models/book.model';
import {Store} from '@ngrx/store';
import {IAppState} from '../../appState/app.state';
import {getWishListBookList} from '../../selectors/wishList.selector';
import {addToWishList, removeFromWishList} from '../../actions/wishList.actions';
import {addToCart} from '../../actions/cart.action';


@Component({
   selector: 'app-wish-list',
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <app-book-list [inWishListCollection]="true" [booksLists]="wishListBookList | async"
                     (removeBookFromWishList)="removeFormWishList($event)" (addToCart)="addToCartList($event)">
      </app-book-list>

   `,
   styles: [`
      :host{
         height: 90%;
         overflow: auto;
         display: block;
      }
   `]
})
export class WishListContainer implements OnInit {

   public wishListBookList: Observable<Array<IBook>>;

   constructor(private store: Store<IAppState>) {
   }

   ngOnInit() {
      this.wishListBookList = this.store.select(getWishListBookList);
   }

   removeFormWishList(book: IBook) {
      this.store.dispatch(removeFromWishList(book));
   }

   addToCartList(book: IBook) {
      this.store.dispatch(addToCart(book));
   }

}
