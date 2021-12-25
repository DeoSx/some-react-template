import React, { FC } from 'react';

// types
import { UserProfileProps } from './types';

// styles
import { Container, Content, InfoContainer, Label, UserName } from './styles';

const UserProfile: FC<UserProfileProps> = ({ className, username }) => {
  return (
    <Container className={className}>
      <Content>
        <InfoContainer>
          <Label>User Name:</Label>
          <UserName>{username}</UserName>
        </InfoContainer>

        <InfoContainer>
          <Label>Role:</Label>
          <UserName>менеджер</UserName>
        </InfoContainer>
      </Content>
    </Container>
  );
};

export default UserProfile;
