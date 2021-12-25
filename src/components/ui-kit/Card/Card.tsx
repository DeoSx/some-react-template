import React, { FC } from 'react';

// types
import { CardProps } from './types';

// styles
import { Container, Content, Title } from './styles';

const Card: FC<CardProps> = ({ className, title, children }) => {
  return (
    <Container className={className}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default Card;
