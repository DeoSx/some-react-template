import React, { forwardRef } from 'react';
import Icon from '../Icon';

import { CheckboxProps } from './types';
import * as Style from './style';

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, error, hasBackground, label, size, ...inputProps }, inputRef) => (
    <Style.Container
      checked={inputProps.checked}
      error={error}
      disabled={inputProps.disabled}
      hasBackground={hasBackground}
      htmlFor={inputProps.id}
      size={size}
      className={className}
    >
      <Style.Input ref={inputRef} type="checkbox" {...inputProps} />
      <Style.Box>
        <Style.Icon as={Icon} type="checkmark" />
      </Style.Box>
      {label && <Style.Label>{label}</Style.Label>}
    </Style.Container>
  )
);

export default Checkbox;
