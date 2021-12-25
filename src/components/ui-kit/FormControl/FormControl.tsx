import React, { FC } from 'react';
import { FormControlProps } from './types';
import * as Styles from './style';

const FormControl: FC<FormControlProps> = ({ className, label, isRequired, error, children }) => (
  <Styles.Container className={className}>
    {label && (
      <Styles.Label>
        {label}
        {isRequired && <Styles.StyledIcon type="requiredMarker" />}
      </Styles.Label>
    )}
    {React.isValidElement<{ error?: boolean }>(children)
      ? React.cloneElement(children, {
          error: children.props.error ?? !!error,
        })
      : children}
    {error && <Styles.ErrorLabel>{error}</Styles.ErrorLabel>}
  </Styles.Container>
);

export default FormControl;
