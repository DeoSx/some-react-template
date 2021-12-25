import React, { FC } from 'react';

// types
import { UserProfileProps } from './types';

// styles
import { Container, Name, ProfileContent, ProfileImg, Role } from './styles';

// utils
import { USER_ROLE } from './data';

// components
import Icon from '../ui-kit/Icon';

const UserProfile: FC<UserProfileProps> = ({ className, name, userRole = 'manager' }) => {
  return (
    <Container className={className}>
      <ProfileImg>
        <Icon type="userTie" />
      </ProfileImg>

      <ProfileContent>
        <Name>{name}</Name>
        <Role>{USER_ROLE[userRole]}</Role>
      </ProfileContent>
    </Container>
  );
};

export default UserProfile;
