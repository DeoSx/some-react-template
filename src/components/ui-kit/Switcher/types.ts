import { ChangeEventHandler } from 'react';

import { IconType } from '../Icon';

export interface SwitcherOption {
  value: string;
  icon?: IconType;
  label: string;
}

export type SwitcherSize = 'small' | 'medium' | 'large';

export interface SwitcherProps {
  /** Additional class name(s). */
  className?: string;
  /** HTML name attribute. */
  name?: string;
  /** List of options to choose from. */
  options: SwitcherOption[];
  /** Component size. */
  size?: SwitcherSize;
  /** The current value. */
  value?: string;
  /** Called when the user selects an option. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
