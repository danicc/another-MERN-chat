import { NavigationItem } from '../../types';

export type NavigationAction =
  | {
      type: 'navigateForward';
      payload: NavigationItem;
    }
  | {
      type: 'navigateBackward';
    };

export type NavigationState = {
  currentNavigationItem: NavigationItem;
};

export type NavigationDispatch = (action: NavigationAction) => void;
