import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { UserStateProvider } from './hooks/user';
import { NavigationProvider } from './hooks/navigation';

import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <NavigationProvider>
            <UserStateProvider>
              <Home />
            </UserStateProvider>
          </NavigationProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
