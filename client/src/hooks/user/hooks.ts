import { useContext } from 'react';
import { UserStateContext } from './context';
import { UserStateType } from './';

function useUser() {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserStateProvider');
  }
  return context;
}

function useUserState(): UserStateType {
  return useUser();
}

export { useUserState };
