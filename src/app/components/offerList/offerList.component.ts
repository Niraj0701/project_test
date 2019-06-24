import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {IOffer} from '../../models/offer.model';

@Component({
   selector: 'app-price-offers',
   templateUrl: './offerList.component.html',
   styleUrls: ['./offerList.component.scss']
})
export class OfferListComponent {
   @Input()
   public offersList: Array<IOffer>;

   @Input()
   public finalPrice: number;

   @Input()
   public totalCartValue: number;

   @Output()
   onValueSelect = new EventEmitter();
   private deductedCost = 0;

   private offerTextObject = {
      percentage: '% réduction s’appliquant sur le prix de l’ensemble des livres',
      minus: '€ déduction directement applicable en caisse ',
      slice: '€ remboursement par tranche d’achat '
   };

   constructor() {
   }

   public isSliceOffer(offer: IOffer) {
      return offer.sliceValue ? offer.sliceValue : '';
   }

   public getOfferText(offer: IOffer): string {
      return this.offerTextObject[offer.type];
   }

   public radioChange(event) {
      this.deductedCost = event.value;
      this.onValueSelect.emit(event);
   }

   public isValidForSliceValue(offer: IOffer): boolean {
      return !!(offer.type === 'slice' && this.totalCartValue < offer.sliceValue);
   }

   public deductionInPriceBy(totalCartValue, finalPrice): string {
      return (totalCartValue - finalPrice).toFixed(2);
   }

}
