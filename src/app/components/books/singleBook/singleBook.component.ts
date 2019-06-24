import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IBook} from '../../../models/book.model';

@Component({
   selector: 'app-selected-book-details',
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <div class="bookDetailPage">
         <mat-card class="bookDetail">
            <mat-card-header>
               <div mat-card-avatar class="example-header-image"></div>
               <h2>{{book.title}}</h2>
            </mat-card-header>
            <img class="bookCover" mat-card-image src="{{book.cover}}" alt="Book Cover">
            <mat-card-content>
               <p *ngFor="let synop of book.synopsis">
                  {{synop}}
               </p>
            </mat-card-content>
            <mat-card-actions >
               <button mat-button (click)="onClickAddToCart(book)">Ajouter au panier</button>
               <button mat-button (click)="onClickAddToWishList(book)">Ajouter dans collection</button>
            </mat-card-actions>
         </mat-card>
      </div>

   `,
   styles: [`
      .bookDetailPage{
         overflow: auto;
         height: 95%;
      }
      .bookDetail {
         margin: 5%;
      }
   `]
})
export class AppSingleBookComponent {
   @Input()
   public book: IBook;

   @Output() addToWishList = new EventEmitter<IBook>();
   @Output() addToCart = new EventEmitter<IBook>();

   constructor() {
   }

   public onClickAddToWishList(book: IBook) {
      this.addToWishList.emit(book);
   }

   public onClickAddToCart(book: IBook) {
      this.addToCart.emit(book);
   }
}
