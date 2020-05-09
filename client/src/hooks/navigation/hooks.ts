import { useContext } from 'react';
import { NavigationStateContext, NavigationDispatchContext } from './context';
import { NavigationState, NavigationDispatch } from './index';

function useNavigationState() {
  const context = useContext(NavigationStateContext);
  if (context === undefined) {
    throw new Error(
      'useNavigationState must be used within a NavigationProvider'
    );
  }
  return context;
}

function useNavigationDispatch() {
  const context = useContext(NavigationDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useNavigationDispatch must be used within a NavigationProvider'
    );
  }
  return context;
}

function useNavigation(): [NavigationState, NavigationDispatch] {
  return [useNavigationState(), useNavigationDispatch()];
}

export { useNavigationState, useNavigationDispatch, useNavigation };

