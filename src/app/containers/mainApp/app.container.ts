import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../../appState/app.state';
import {closeSideNav, openSideNav} from '../../actions/sideNav.action';
import {toggleSideNaveSelector} from '../../selectors/sideNave.selector';


@Component({
   selector: 'app-root',
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <app-side-nav>
         <app-sidenav [open]="toggleSideNAv | async">
            <app-nav-item (activate)="closeSidenav()" routerLink="/" icon="search" hint="Chercher le livre ici">
               Cherche..
            </app-nav-item>
            <app-nav-item (activate)="closeSidenav()" routerLink="/wish_list" icon="book" hint="Voir le collection">
               Collection
            </app-nav-item>
            <app-nav-item (activate)="closeSidenav()" routerLink="/cart" icon="shopping_cart" hint="Voir le Panier">
               Panier
            </app-nav-item>
            <app-nav-item (activate)="closeSidenav()" icon="close">
               Fermer le Menu
            </app-nav-item>
         </app-sidenav>
         <app-toolbar (openMenu)="openSidenav()">
            <span style="width: 30px;"></span>
            <span>Bibliothèque</span>
         </app-toolbar>
         <router-outlet></router-outlet>
      </app-side-nav>
   `,
   styleUrls: ['./app.container.scss']
})
// tslint:disable-next-line:component-class-suffix
export class AppContainer {

   public toggleSideNAv: Observable<boolean>;

   constructor(private store: Store<IAppState>) {
      this.toggleSideNAv = this.store.select(toggleSideNaveSelector);
   }

   openSidenav() {
      this.store.dispatch(openSideNav());
   }

   closeSidenav() {
      this.store.dispatch(closeSideNav());
   }
}
