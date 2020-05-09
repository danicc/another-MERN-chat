import React from 'react';
import { Container } from 'semantic-ui-react';

import { useUserState } from '../../hooks/user';
import { useNavigationDispatch } from '../../hooks/navigation';
import { getUsers } from '../../services/user';
import UserList from './Users';
import { NavigationItem, User } from '../../types';

interface Props {}

const UsersContainer: React.FC<Props> = () => {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState('');
  const userState = useUserState();
  const setUser = userState[1];
  const navigationDispatch = useNavigationDispatch();

  React.useEffect(() => {
    async function getUsersAsync() {
      try {
        const data = await getUsers();
        if (!data) return;

        const { error, body } = data;
        if (error) {
          setError('Error fetching users');
          return;
        }

        setUsers(body);
      } catch (e) {
        setError('Error fetching users');
      }
    }

    getUsersAsync();
  }, []);

  function handleOnUserClick(selectedUser: User) {
    navigationDispatch({
      type: 'navigateForward',
      payload: NavigationItem.CHATS,
    });
    setUser(selectedUser);
  }

  return (
    <Container>
      {error && <div>{error}</div>}
      {users && <UserList users={users} onUserClick={handleOnUserClick} />}
    </Container>
  );
};

export default UsersContainer;
