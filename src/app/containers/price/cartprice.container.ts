import {Component, ChangeDetectionStrategy, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../../appState/app.state';
import {Observable} from 'rxjs';
import {IBook} from '../../models/book.model';
import {getOffer} from '../../actions/cart.action';
import {getCartBookList, getCartOffers} from '../../selectors/cart.selector';
import {IOffer} from '../../models/offer.model';

@Component({
   selector: 'app-cart-price',
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <app-price-offers [offersList]="getOffers | async " [finalPrice]="finalPrice" [totalCartValue]="totalPriceOfBooks"
                        (onValueSelect)="onRadioValueChange($event)"></app-price-offers>
   `
})
// tslint:disable-next-line:component-class-suffix
export class CartPriceContainer implements OnInit {

   public cartBookList: Observable<Array<IBook>>;
   public getOffers: Observable<Array<IOffer>>;
   public totalPriceOfBooks: number;
   public finalPrice: number;
   @Input()
   public bookList: Array<IBook>;

   constructor(private store: Store<IAppState>, private changeDetector: ChangeDetectorRef) {
   }

   ngOnInit() {
      this.store.select(getCartBookList).subscribe(books => {
         console.log('triggered...!!!');
         this.calculateTheCartPrice(books);
      });
   }

   calculateTheCartPrice(books: Array<IBook>) {
      this.totalPriceOfBooks = 0;
      this.finalPrice = 0;
      this.bookList = books;
      if (books.length > 0) {
         this.store.dispatch(getOffer(this.bookList));
         this.getOffers = this.store.select(getCartOffers);
      }
      this.totalPrice(this.bookList);
      this.changeDetector.markForCheck();
   }

   public onRadioValueChange(value) {
      console.log('Offer Prices', value);
      this.finalPrice = this.calculateFinalPrice(value);
   }

   private totalPrice(bookList: Array<IBook>) {
      bookList.map(item => {
         this.totalPriceOfBooks += item.price;
      });
      console.log('TOTAL BOOKLIST: ', this.totalPriceOfBooks);
      this.finalPrice = this.totalPriceOfBooks;

   }

   public calculateFinalPrice(offerPrice: IOffer) {
      switch (offerPrice.type) {
         case 'percentage': {
            console.log(this.totalPriceOfBooks % offerPrice.value);
            return this.totalPriceOfBooks - (this.totalPriceOfBooks * (offerPrice.value / 100));
         }
         case 'minus': {
            console.log(this.totalPriceOfBooks - offerPrice.value);
            return this.totalPriceOfBooks - offerPrice.value;
         }
         case 'slice': {
            if (this.totalPriceOfBooks > offerPrice.sliceValue) {
               console.log(this.totalPriceOfBooks - offerPrice.value);
               return this.totalPriceOfBooks - offerPrice.value;
            }
         }
      }
   }
}
