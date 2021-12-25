import { IconType } from '../Icon';

export type ToastMode = 'light' | 'dark' | 'info' | 'success' | 'error';
export type ToastSize = 'small' | 'medium' | 'large';

export interface ToastProps {
  size: ToastSize;
  text: string;
  className?: string;
  visible?: boolean;
  title?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  onClose?: (value: string) => void | string;
  primaryActionName?: string;
  secondaryActionName?: string;
  mode: ToastMode;
  iconType?: IconType;
  autoHideDelay?: number;
  name?: string;
}

export interface ModeType {
  light: string;
  dark: string;
  info: string;
  success: string;
  error: string;
}

export interface TypeStyle {
  small?: string;
  medium?: string;
  large?: string;
}

export interface IToastDiv extends Omit<ToastProps, 'text'> {
  visible: boolean;
}

export interface ISettings {
  mode: ToastMode;
  itemType: ToastSize;
}
