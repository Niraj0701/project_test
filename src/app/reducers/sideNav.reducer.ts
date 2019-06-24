import {sideNavActions, SideNaveActionsTypes} from '../actions/sideNav.action';

export interface ISideNavState {
   openSideNav: boolean;
}

const initialSideNavState: ISideNavState = {
   openSideNav: false,
};

export const sideNaveReducer = (state: ISideNavState = initialSideNavState, action: sideNavActions) => {
   switch (action.type) {
      case SideNaveActionsTypes.OPEN_SIDENAV:
         return {
            openSideNav: true
         };

      case SideNaveActionsTypes.CLOSE_SIDENAV:
         return {
            openSideNav: false
         };

      default:
         return state;
   }
};

export const getOpenSideNav = (state: ISideNavState) => state.openSideNav;
