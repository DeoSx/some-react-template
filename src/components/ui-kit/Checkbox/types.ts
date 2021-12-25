import { InputHTMLAttributes, ReactNode } from 'react';

export type CheckboxSize = 'small' | 'medium' | 'large';

export interface CheckboxContainerProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  hasBackground?: boolean;
  size?: CheckboxSize;
}

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    CheckboxContainerProps {
  label?: ReactNode;
}
