import React from 'react';
import { Button, Container } from 'semantic-ui-react';

import { useNavigation } from '../../hooks/navigation';
import { useUserState } from '../../hooks/user';
import { NavigationItem } from '../../types';
import { CurrentUser } from '../';
import './header.css';

interface Props {
  title: string;
}

const HeaderComponent: React.FC<Props> = ({ title }) => {
  const [currentUser, setCurrentUser] = useUserState();
  const [navigationState, navigationDispatch] = useNavigation();

  return (
    <Container>
      <div className="headerContainer">
        {navigationState.currentNavigationItem !== NavigationItem.USERS && (
          <Button
            primary
            color="red"
            content="Return"
            icon="arrow alternate circle left outline"
            labelPosition="left"
            onClick={() => {
              navigationDispatch({ type: 'navigateBackward' });
              if (
                navigationState.currentNavigationItem === NavigationItem.CHATS
              ) {
                setCurrentUser(null);
              }
            }}
          />
        )}
        <h1 className="headerTitle">{title}</h1>
        {currentUser && (
          <div className="headerUser">
            <CurrentUser user={currentUser} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default HeaderComponent;
