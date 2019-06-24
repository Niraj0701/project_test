import {Action} from '@ngrx/store';

export enum SideNaveActionsTypes {
   OPEN_SIDENAV = 'OPEN_SIDENAV',
   CLOSE_SIDENAV = 'CLOSE_SIDENAV'
}


export interface IOpenSidenavAction extends Action {
   readonly type: SideNaveActionsTypes.OPEN_SIDENAV;
}

export interface ICloseSidenavAction extends Action {
   readonly type: SideNaveActionsTypes.CLOSE_SIDENAV;
}

// tslint:disable-next-line:no-shadowed-variable
export const openSideNav = (): IOpenSidenavAction => {
   return {
      type: SideNaveActionsTypes.OPEN_SIDENAV
   };
};

// tslint:disable-next-line:no-shadowed-variable
export const closeSideNav = (): ICloseSidenavAction => {
   return {
      type: SideNaveActionsTypes.CLOSE_SIDENAV
   };
};

export type sideNavActions = ICloseSidenavAction | IOpenSidenavAction;
