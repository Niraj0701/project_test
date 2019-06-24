import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavComponent} from './sideNav/sideNav.component';
import {AppMaterialModule} from '../material.module';
import {AppNavItemComponent} from './navItem/navItem.component';
import {AppToolbarComponent} from './toolbar/toolbar.component';
import {AppSideNavContainerComponent} from './sideNav/sideNavContainer.component';
import {AppSearchComponent} from './search/search.component';
import {AppBooksListComponent} from './books/bookList/bookList.component';
import {AppSingleBookComponent} from './books/singleBook/singleBook.component';
import {OfferListComponent} from './offerList/offerList.component';
import {PriceComponent} from './price/price.component';
import {RouterModule} from '@angular/router';



export const COMPONENTS = [
   SidenavComponent,
   AppNavItemComponent,
   AppToolbarComponent,
   AppSideNavContainerComponent,
   AppSearchComponent,
   AppBooksListComponent,
   AppSingleBookComponent,
   OfferListComponent,
   PriceComponent
];


@NgModule({
   imports: [
      CommonModule,
      AppMaterialModule,
      RouterModule
   ],
   declarations: COMPONENTS,
   exports: COMPONENTS
})
export class ComponentsModule { }
