import React from 'react';
import {
  Button,
  Container,
  Header,
  Grid,
  Card,
  Image,
  Icon,
  Divider,
} from 'semantic-ui-react';

import './users.css';
import { User } from '../../types';

interface Props {
  users: Array<User>;
  onUserClick: (user: User) => void;
}

const Users: React.FC<Props> = ({ users, onUserClick }) => {
  return (
    <Container>
      <Header as="h3">Login as:</Header>
      <Grid stackable>
        {users.map((user: User) => (
          <Grid.Column key={user._id} mobile={16} tablet={8} computer={4}>
            <Card>
              <Image
                src={
                  user.avatar ||
                  `https://react.semantic-ui.com/images/avatar/large/matthew.png`
                }
                wrapped
                ui={false}
              />
              <Card.Content style={{ height: '200px' }}>
                <Card.Header>
                  <div className="userCardHeader">
                    <div className="userCardHeader__title">{user.name}</div>
                    <Button
                      basic
                      color="blue"
                      onClick={() => {
                        onUserClick(user);
                      }}
                    >
                      Enter
                      <Icon name="arrow alternate circle right outline" />
                    </Button>
                  </div>
                </Card.Header>
                <Divider />
                <Card.Meta>
                  <a
                    href={user.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.twitter}
                  </a>
                </Card.Meta>
                <Card.Description>{user.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <span>
                  <Icon name="map marker alternate" />
                  {user.location}
                </span>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
};

export default Users;
