import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListContainer} from './containers/book/book.container';
import {CartContainer} from './containers/cart/cart.container';
import {WishListContainer} from './containers/wishList/witshList.container';
import {ViewBookPageContainer} from './containers/viewBook/viewBook.container';

const routes: Routes = [
   {
      path: '',
      component: BookListContainer
   }, {
      path: 'book/:id',
      component: ViewBookPageContainer
   },
   {
      path: 'cart',
      component: CartContainer
   },
   {
      path: 'wish_list',
      component: WishListContainer
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {
}
