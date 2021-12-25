export type ModalType = 'small' | 'default' | 'fullscreen';
export type ModalContentClassName = string;

export interface ModalProps {
  /**
   * Whether to close the modal when the backdrop (area behind the dialog) is
   * clicked.
   */
  backdropClosable?: boolean;
  /** Additional class name(s). */
  className?: string;
  /** Whether the modal is open. */
  isOpen?: boolean;
  /**
   * Called after the modal is closed (i.e. when the closing animation is
   * finished).
   */
  onClose?: () => void;
  /** Whether to unmount children after close. */
  destroyOnClose?: boolean;
  /** Modal size type. */
  type?: ModalType;
}
