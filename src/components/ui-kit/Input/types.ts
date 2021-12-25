import { ChangeEventHandler, MouseEventHandler } from 'react';
import { SpaceProps, FlexboxProps } from 'styled-system';
import { IconType } from '../Icon';

export type ChangeHandler = (value: string) => unknown;

export type InputProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  error?: boolean;
  prefix?: string;
  suffix?: string;
  icon?: IconType;
  iconAtRight?: boolean;
  value?: string;
  type?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onChange?: ChangeHandler;
  onKeyPress?: (event: KeyboardEvent) => void;
  placeholder?: string;
} & SpaceProps &
  FlexboxProps;

export type TRight = { right?: boolean };

export type InputPlaceholderProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  error?: boolean;
  prefix?: string;
  suffix?: string;
  icon?: IconType;
  iconAtRight?: boolean;
  showPlaceholder?: boolean;
  placeholder?: string;
  showReplacement?: boolean;
  replacement?: string;
  value: string;
  /** Align right */
  right?: boolean;
  onChange: ChangeEventHandler;
};
