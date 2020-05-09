import React from 'react';
import { Container } from 'semantic-ui-react';

import { useNavigation } from '../hooks/navigation';
import { Chat, NavigationItem } from '../types';
import { Users, Chats, Channel, PageLayout } from '../components';

const Home: React.FC = () => {
  const [navigationState, navigationDispatch] = useNavigation();
  const [selectedChat, setSelectedChat] = React.useState<Chat | null>();

  function handleChatClick(chat: Chat) {
    setSelectedChat(chat);
    navigationDispatch({
      type: 'navigateForward',
      payload: NavigationItem.CHANNEL,
    });
  }

  const HomeContent = {
    [NavigationItem.USERS]: <Users />,
    [NavigationItem.CHATS]: <Chats onChatClick={handleChatClick} />,
    [NavigationItem.CHANNEL]: selectedChat && <Channel chat={selectedChat} />,
  };

  return (
    <PageLayout>
      <Container>
        {HomeContent[navigationState.currentNavigationItem]}
      </Container>
    </PageLayout>
  );
};

export default Home;
