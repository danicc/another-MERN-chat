import * as types from './types';
import { NavigationProvider } from './context';
import {
  useNavigationState,
  useNavigationDispatch,
  useNavigation,
} from './hooks';

export type NavigationAction = types.NavigationAction;
export type NavigationState = types.NavigationState;
export type NavigationDispatch = types.NavigationDispatch;

export {
  NavigationProvider,
  useNavigationState,
  useNavigationDispatch,
  useNavigation,
};
