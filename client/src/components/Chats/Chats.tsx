import React from 'react';
import { Button, Header, Card, List, Icon } from 'semantic-ui-react';

import './chats.css';
import { Chat, User } from '../../types';

interface Props {
  chats: Array<Chat>;
  onChatClick: (chat: Chat) => void;
  currentUser: User;
}

const Chats: React.FC<Props> = ({ chats, onChatClick, currentUser }) => {
  return (
    <div>
      <Header as="h3">Current Chats</Header>
      <List>
        {chats.map((chat) => (
          <List.Item key={chat._id}>
            {chat.users
              .filter((u) => u._id !== currentUser._id)
              .map(({ _id, name, description, location }) => (
                <Card key={_id}>
                  <Card.Content>
                    <Card.Header>
                      <div className="chatCardHeader">
                        <div className="chatCardHeader__title">{name}</div>
                        <Button
                          basic
                          color="blue"
                          onClick={() => {
                            onChatClick(chat);
                          }}
                        >
                          Chat Room
                          <Icon name="arrow alternate circle right outline" />
                        </Button>
                      </div>
                    </Card.Header>
                    <Card.Meta>
                      <span>{location}</span>
                    </Card.Meta>
                    <Card.Description>{description}</Card.Description>
                  </Card.Content>
                </Card>
              ))}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default Chats;
