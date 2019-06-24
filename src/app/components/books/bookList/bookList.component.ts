import {Component, Output, Input, EventEmitter, OnInit} from '@angular/core';
import {IBook} from '../../../models/book.model';


@Component({
   selector: 'app-book-list',
   templateUrl: './bookList.component.html',
   styleUrls: ['./bookList.component.scss']
})
export class AppBooksListComponent implements OnInit {
   @Input() booksLists: Array<IBook>;
   @Input() inCartCollection: boolean;
   @Input() inWishListCollection: boolean;
   @Output() addToWishList = new EventEmitter<IBook>();
   @Output() addToCart = new EventEmitter<IBook>();
   @Output() removeBookFromCart = new EventEmitter<IBook>();
   @Output() removeBookFromWishList = new EventEmitter<IBook>();

   constructor() {
   }

   ngOnInit() {}

   public onClickAddToWishList(book: IBook) {
      this.addToWishList.emit(book);
   }

   public onClickAddToCart(book: IBook) {
      this.addToCart.emit(book);
   }

   public removeFromCart(book: IBook) {
      this.removeBookFromCart.emit(book);
   }

   public removeFromWishList(book: IBook) {
      this.removeBookFromWishList.emit(book);
   }
}
