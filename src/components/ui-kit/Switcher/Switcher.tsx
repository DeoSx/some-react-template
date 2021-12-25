import React, { FC } from 'react';

import Icon from '../Icon';

import * as Style from './style';
import { SwitcherProps } from './types';

const Switcher: FC<SwitcherProps> = ({ className, name, onChange, size, value, options }) => (
  <Style.Container className={className} size={size}>
    {options.map((option) => (
      <Style.Option key={option.value}>
        <Style.Input
          onChange={onChange}
          type="radio"
          checked={value != null ? value === option.value : undefined}
          name={name}
          value={option.value}
        />

        {option.icon ? (
          <Style.Label title={option.label}>
            <Style.Icon as={Icon} type={option.icon} />
          </Style.Label>
        ) : (
          <Style.Label>{option.label}</Style.Label>
        )}
      </Style.Option>
    ))}
  </Style.Container>
);

export default Switcher;
