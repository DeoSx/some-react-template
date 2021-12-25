import React, { FC } from 'react';

// types
import { EmptyProps } from './types';

// styles
import { Container } from './styles';

const Empty: FC<EmptyProps> = ({ className, title }) => {
  return <Container className={className}>{title}</Container>;
};

export default Empty;
