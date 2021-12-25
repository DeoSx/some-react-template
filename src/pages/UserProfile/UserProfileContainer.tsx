import React from 'react';

// utils
import { useSelector } from 'react-redux';

// components
import UserProfile from './UserProfile';

// types
import { RootState } from '../../_reducers';

const UserProfileContainer = () => {
  const { login } = useSelector(({ user }: RootState) => user.user);
  return <UserProfile username={login} />;
};

export default UserProfileContainer;
