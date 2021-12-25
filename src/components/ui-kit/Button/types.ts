import { ButtonHTMLAttributes } from 'react';
import type { IconType } from '../Icon';

export type ButtonColorScheme = 'red' | 'purple' | 'green' | 'blue' | 'white' | 'none';

export interface TextColors {
  primary: string;
  secondary: string;
  disabled: string;
  loader: string;
}

export interface BackgroundColors {
  default: string;
  hover: string;
  active: string;
  disabled: string;
  loading: string;
  band: string;
}

export interface FilledColors {
  color: TextColors;
  background: BackgroundColors;
}

export interface RoundedColors {
  color: TextColors;
  background: Omit<BackgroundColors, 'loading'>;
}

export interface BadgeColors {
  color: Omit<BackgroundColors, 'loading' | 'band'>;
  background: Omit<BackgroundColors, 'loading' | 'band'>;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme?: ButtonColorScheme;
  loading?: boolean;
  progress?: number;
  size?: 'small' | 'medium' | 'large';
  variant?: 'filled' | 'rounded';
  badge?: string;
  icon?: IconType;
  iconAtRight?: boolean;
  iconOnly?: boolean;
}
