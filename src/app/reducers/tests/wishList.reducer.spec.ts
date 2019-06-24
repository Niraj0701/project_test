import {IWishListState, wishListReducer} from '../wishList.reducer';
import {
   addToWishList,
   IAddToWishListAction,
   IRemoveFromWishListAction,
   removeFromWishList
} from '../../actions/wishList.actions';

describe('Test for WishList Reducer', () => {
   let singleBook = {};

   const initialWishListState: IWishListState = {
      wishList: []
   };

   beforeEach(() => {
      singleBook = {
         cover: 'http://henri-potier.xebia.fr/hp0.jpg',
         isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
         price: 35,
         synopsis: ['test1', 'Test2'],
         title: 'Henri Potier à l\'école des sorciers'
      };
   });

   afterEach(() => {
      singleBook = {};
   });

   it('should add SingleBook to the state ', () => {
      const addBookAction: IAddToWishListAction = addToWishList(singleBook);
      const result = wishListReducer(initialWishListState, addBookAction);
      expect(result).not.toBeNull();
      expect(result.wishList).toEqual(jasmine.any(Array));
      expect(result.wishList).toContain(singleBook);
   });

   it('should remove SingleBook from WishListState', () => {
      const removeBookAction: IRemoveFromWishListAction = removeFromWishList(singleBook);
      const result = wishListReducer(initialWishListState, removeBookAction);
      expect(result).not.toBeNull();
      expect(result.wishList).toEqual(jasmine.any(Array));

   });
});
