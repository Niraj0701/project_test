import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IOffer} from '../../models/offer.model';

@Component({
   selector: 'app-book-price',
   templateUrl: './price.component.html',
   styleUrls: ['./price.component.scss']
})
export class PriceComponent {
   @Input()
   public finalPrice: number;

   @Input()
   public csc : number;
}
