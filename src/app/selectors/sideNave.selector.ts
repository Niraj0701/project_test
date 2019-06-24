import {getOpenSideNav, ISideNavState} from '../reducers/sideNav.reducer';
import {createSelector} from '@ngrx/store';
import {IAppState} from '../appState/app.state';

const getSideState = (state: IAppState) => state.sideNav;

export const toggleSideNaveSelector = createSelector(getSideState, (state: ISideNavState) => state.openSideNav );
