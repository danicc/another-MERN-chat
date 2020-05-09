import React from 'react';
import { Container } from 'semantic-ui-react';

import { useUserState } from '../../hooks/user';
import ChatList from './Chats';
import { getChatsByUser } from '../../services/chat';
import { Chat } from '../../types';

interface Props {
  onChatClick: (chat: Chat) => void;
}
const ChatsContainer: React.FC<Props> = ({ onChatClick }) => {
  const [chats, setChats] = React.useState([]);
  const [error, setError] = React.useState('');
  const userState = useUserState();
  const currentUser = userState[0];

  React.useEffect(() => {
    async function getChatsAsync() {
      try {
        const data = await getChatsByUser(currentUser?._id);
        if (!data) return;

        const { error, body } = data;
        if (error) {
          setError('Error fetching Chats');
          return;
        }

        setChats(body);
      } catch (e) {
        setError('Error fetching Chats');
      }
    }

    getChatsAsync();
  }, [currentUser]);

  return (
    <Container>
      {error && <div>error</div>}
      {currentUser && chats && (
        <ChatList
          chats={chats}
          onChatClick={onChatClick}
          currentUser={currentUser}
        />
      )}
    </Container>
  );
};

export default ChatsContainer;
