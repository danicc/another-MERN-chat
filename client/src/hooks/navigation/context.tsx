import React, { createContext, useReducer, useMemo } from 'react';

import { NavigationItem } from '../../types';
import { NavigationState, NavigationDispatch } from './index';
import NavigationReducer from './reducer';

export const initialState: NavigationState = {
  currentNavigationItem: NavigationItem.USERS,
};

const NavigationStateContext = createContext<NavigationState | undefined>(
  undefined
);
const NavigationDispatchContext = createContext<NavigationDispatch | undefined>(
  undefined
);

interface NavigationProviderProps {
  children: React.ReactNode;
}

function NavigationProvider({ children }: NavigationProviderProps) {
  const [state, dispatch] = useReducer(NavigationReducer, initialState);
  const {
    memoState,
    memoDispatch,
  }: {
    memoState: NavigationState;
    memoDispatch: NavigationDispatch;
  } = useMemo(() => {
    return {
      memoState: state,
      memoDispatch: dispatch,
    };
  }, [state]);

  return (
    <NavigationStateContext.Provider value={memoState}>
      <NavigationDispatchContext.Provider value={memoDispatch}>
        {children}
      </NavigationDispatchContext.Provider>
    </NavigationStateContext.Provider>
  );
}

export {
  NavigationProvider,
  NavigationStateContext,
  NavigationDispatchContext,
};
