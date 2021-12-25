import React from 'react';

// utils
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// components
import UserProfile from './UserProfile';

// types
import { RootState } from '../../_reducers';

const UserProfileContainer = () => {
  const { login } = useSelector(({ user }: RootState) => user.user);

  return (
    <NavLink to="/user">
      <UserProfile name={login || localStorage.getItem('login')} userRole="manager" />
    </NavLink>
  );
};

export default UserProfileContainer;
