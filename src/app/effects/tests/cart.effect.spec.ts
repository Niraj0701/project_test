import {ReplaySubject} from 'rxjs';
import {CartEffects} from '../cart.effect';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {BooksApiService} from '../../services/bookApi.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {allReducers} from '../../reducers';
import {IPutOffersToCart} from '../../actions/cart.action';
import {Actions} from '@ngrx/effects';

describe('getDiscountOffers', () => {

   // tslint:disable-next-line:prefer-const
   let actions: ReplaySubject<any>;
   let effects: CartEffects;
   let bookApiService: BooksApiService;
   let http: HttpClient;
   let spy: any;
   const offersFromApi = {
      'offers': [
         {
            'type': 'percentage',
            'value': 4
         },
         {
            'type': 'minus',
            'value': 15
         },
         {
            'type': 'slice',
            'sliceValue': 100,
            'value': 12
         }
      ]
   };

   beforeEach(() => {
      bookApiService = new BooksApiService(http);
      TestBed.configureTestingModule({
         imports: [HttpClientTestingModule, StoreModule.forRoot(allReducers)],
         providers: [
            BooksApiService,
            CartEffects,
            provideMockActions(() => actions)
         ]
      });

      effects = TestBed.get(CartEffects);
   });
   it('should be created', async () => {
      spy = spyOn(bookApiService, 'getOfferForBooks').and.returnValue(offersFromApi);
      expect(effects).toBeTruthy();
   });
   it('should dispactch next Action IPutOffersToCart', async () => {
      spy = spyOn(bookApiService, 'getOfferForBooks').and.returnValue(offersFromApi);
      const action = new ReplaySubject(1);
      const putOffersAction = {
         type: 'PUT_OFFERS',
         offers: offersFromApi.offers
      };
      action.next(putOffersAction);
      const nextAction = await effects.getDiscountOffers;
      expect(nextAction).not.toBeNull(Actions);
      action.subscribe((dataForPutOffers: IPutOffersToCart) => {
         expect(dataForPutOffers.type).toEqual('PUT_OFFERS');
         expect(dataForPutOffers.offers).toEqual(offersFromApi.offers);
      });

   });
});
