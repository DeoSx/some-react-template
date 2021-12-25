import React, { FC, memo } from 'react';
import { ModalTitleBlockProps } from './types';
import * as Styles from './styles';

const ModalTitleBlock: FC<ModalTitleBlockProps> = ({ title, subtitle }) => {
  return (
    <Styles.TitleContainer>
      <Styles.MainTitleLine>
        <Styles.Title>{title}</Styles.Title>
      </Styles.MainTitleLine>
      {!!subtitle && <Styles.Subtitle>{subtitle}</Styles.Subtitle>}
    </Styles.TitleContainer>
  );
};

export default memo(ModalTitleBlock);
