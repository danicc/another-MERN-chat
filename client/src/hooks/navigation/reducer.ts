import { NavigationState, NavigationAction } from './index';
import { NavigationItem } from '../../types';

export default function navigationReducer(
  state: NavigationState,
  action: NavigationAction
): NavigationState {
  switch (action.type) {
    case 'navigateForward': {
      return {
        currentNavigationItem: action.payload,
      };
    }
    case 'navigateBackward': {
      if (state.currentNavigationItem === NavigationItem.CHANNEL) {
        return { ...state, currentNavigationItem: NavigationItem.CHATS };
      }
      if (state.currentNavigationItem === NavigationItem.CHATS) {
        return { ...state, currentNavigationItem: NavigationItem.USERS };
      }
      return state;
    }
    default: {
      return state;
    }
  }
}
