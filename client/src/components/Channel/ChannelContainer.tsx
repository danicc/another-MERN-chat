import React from 'react';
import io from 'socket.io-client';
import { Container } from 'semantic-ui-react';

import { useUserState } from '../../hooks/user';
import { getMessagesByChat, postMessage } from '../../services/messages';
import { Chat, Message } from '../../types';
import Channel from './Channel';

interface Props {
  chat: Chat;
}

const ChannelContainer: React.FC<Props> = ({ chat }) => {
  const [messages, setMessages] = React.useState<Array<Message>>([]);
  const [error, setError] = React.useState('');
  const userStateTuple = useUserState();
  const currentUser = userStateTuple[0];

  React.useEffect(() => {
    const socket = io('http://localhost:8000');
    socket.on('message', (newMessage: Message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          ...newMessage,
          currentUser,
        },
      ]);
    });
  }, [currentUser]);

  React.useEffect(() => {
    async function getMessagesByChatAsync() {
      try {
        const data = await getMessagesByChat(chat._id);
        if (!data) return;

        const { error, body } = data;
        if (error) {
          setError('Error fetching Messages');
          return;
        }

        setMessages(body);
      } catch (e) {
        setError('Error fetching Messages');
      }
    }

    getMessagesByChatAsync();
  }, [chat._id]);

  function handleOnSubmit(message: string) {
    postMessage(chat._id, currentUser?._id, message);
  }

  const friend = chat.users.filter(
    (chatUser) => chatUser._id !== currentUser?._id
  )[0];
  return (
    <Container>
      {error && <div>Error</div>}
      {currentUser && messages && friend && (
        <Channel
          messages={messages}
          onSubmit={handleOnSubmit}
          friend={friend}
        />
      )}
    </Container>
  );
};

export default ChannelContainer;
