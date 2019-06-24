import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppContainer} from './containers/mainApp/app.container';
import {AppMaterialModule} from './material.module';
import {ComponentsModule} from './components/components.module';
import {StoreModule} from '@ngrx/store';
import {allReducers} from './reducers';
import {BookListContainer} from './containers/book/book.container';
import {CartContainer} from './containers/cart/cart.container';
import {WishListContainer} from './containers/wishList/witshList.container';
import {BooksApiService} from './services/bookApi.service';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from './effects/book.effect';
import {HttpClientModule} from '@angular/common/http';
import {ViewBookPageContainer} from './containers/viewBook/viewBook.container';
import {SelectedBookContainer} from './containers/viewBook/selectedBook.container';
import {CartEffects} from './effects/cart.effect';
import {CartPriceContainer} from './containers/price/cartprice.container';
@NgModule({
   declarations: [
      AppContainer,
      BookListContainer,
      CartContainer,
      WishListContainer,
      ViewBookPageContainer,
      SelectedBookContainer,
      CartPriceContainer
   ],
   imports: [
      AppMaterialModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ComponentsModule,
      StoreModule.forRoot(allReducers),
      EffectsModule.forRoot([BookEffects, CartEffects]),
      StoreDevtoolsModule.instrument()
   ],
   providers: [BooksApiService],
   bootstrap: [AppContainer]
})
export class AppModule {
}
