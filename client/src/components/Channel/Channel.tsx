import React from 'react';
import { Grid, Form, Container, Comment, Header } from 'semantic-ui-react';

import { Message, User } from '../../types';

interface Props {
  messages: Array<Message>;
  onSubmit: (e: any) => void;
  friend: User;
}

const Channel: React.FC<Props> = ({ messages, onSubmit, friend }) => {
  const [draftMessage, setDraftMessage] = React.useState('');
  return (
    <Container>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Comment.Group>
              <Header as="h3" dividing>
                Chat with {friend.name}
              </Header>
              {messages.map((message: Message) => (
                <Comment key={message._id}>
                  <Comment.Avatar src={message.user.avatar} />
                  <Comment.Content>
                    <Comment.Author as="a">{message.user.name}</Comment.Author>
                    <Comment.Metadata>
                      <span>{message.date}</span>
                    </Comment.Metadata>
                    <Comment.Text>{message.message}</Comment.Text>
                  </Comment.Content>
                </Comment>
              ))}
            </Comment.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(draftMessage);
              }}
            >
              <Form.Field>
                <label htmlFor="draftMessage">Message</label>
                <textarea
                  id="draftMessage"
                  name="draftMessage"
                  placeholder="write a message..."
                  style={{ height: '3rem' }}
                  value={draftMessage}
                  onChange={(e) => setDraftMessage(e.currentTarget.value)}
                />
              </Form.Field>
              <Form.Button
                primary
                type="submit"
                disabled={!draftMessage.trim()}
              >
                Send
              </Form.Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Channel;
