import { ModalProps } from '../types';

export interface ModalContentProps extends Pick<ModalProps, 'isOpen'> {
  open?: boolean;
}
