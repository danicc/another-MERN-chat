import React from 'react';

import { User } from '../../types';
import './currentUser.css';

interface Props {
  user: User;
}

const CurrentUser: React.FC<Props> = ({ user }) => {
  return (
    <div className="userProfile">
      <img className="userAvatarImg" src={user.avatar} alt="user avatar" />
      <div className="userNameTxt">{user.name}</div>
    </div>
  );
};

export default CurrentUser;
