import React, { createContext, useState } from 'react';

import { User } from '../../types';
import { UserStateType } from './';

const UserStateContext = createContext<UserStateType | undefined>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

function UserStateProvider({ children }: UserProviderProps) {
  const userState = useState<User | null>(null);

  return (
    <UserStateContext.Provider value={userState}>
      {children}
    </UserStateContext.Provider>
  );
}

export { UserStateProvider, UserStateContext };
