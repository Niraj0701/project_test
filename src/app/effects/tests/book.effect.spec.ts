import {ReplaySubject} from 'rxjs';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {BooksApiService} from '../../services/bookApi.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StoreModule} from '@ngrx/store';
import {allReducers} from '../../reducers';
import {Actions} from '@ngrx/effects';
import {BookEffects} from '../book.effect';
import {IGetBookListSuccessAction} from '../../actions/book.action';

describe('Test for BookEffects', () => {

   describe('test for BookEffects --> getDiscountOffers', () => {
      // tslint:disable-next-line:prefer-const
      let actions: ReplaySubject<any>;
      let effects: BookEffects;
      let bookApiService: BooksApiService;
      let http: HttpClient;
      let spy: any;

      const bookListFromApi = [{
         cover: 'http://henri-potier.xebia.fr/hp0.jpg',
         isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
         price: 35,
         synopsis: ['test1', 'Test2'],
         title: 'Henri Potier à l\'école des sorciers'
      }];

      beforeEach(() => {
         bookApiService = new BooksApiService(http);
         TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, StoreModule.forRoot(allReducers)],
            providers: [
               BooksApiService,
               BookEffects,
               provideMockActions(() => actions)
            ]
         });

         effects = TestBed.get(BookEffects);
      });
      it('should create an effect BookEffect', async () => {
         spy = spyOn(bookApiService, 'getAllBooks').and.returnValue(bookListFromApi);
         expect(effects).toBeTruthy();
      });
      it('should dispact next Action IGetBookListSuccessAction', async () => {
         spy = spyOn(bookApiService, 'getAllBooks').and.returnValue(bookListFromApi);
         const action = new ReplaySubject(1);
         const getBookListSuccessAction = {
            type: 'GET_BOOK_LIST_SUCCESS',
            results: bookListFromApi
         };
         action.next(getBookListSuccessAction);
         const nextAction = await effects.bookList;
         expect(nextAction).not.toBeNull(Actions);
         action.subscribe((dataForPutOffers: IGetBookListSuccessAction) => {
            expect(dataForPutOffers.type).toEqual('GET_BOOK_LIST_SUCCESS');
            expect(dataForPutOffers.results).toEqual(bookListFromApi);
         });

      });
   });

});
