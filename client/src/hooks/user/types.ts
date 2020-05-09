import React from 'react';

import { User } from '../../types';

export type UserStateType = [
  User | null,
  React.Dispatch<React.SetStateAction<User | null>>
];
