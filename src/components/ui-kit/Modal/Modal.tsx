import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import FocusTrap from 'focus-trap-react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Icon from '../Icon';
import ModalTitleBlock from './TitleBlock';
import ModalTabs from './Tabs';
import { ModalProps } from './types';
import * as Styles from './styles';
import ModalContent from './Content';

const TRANSITION_DURATION = 200;

interface ModalWithSubcomponents extends FC<ModalProps> {
  Header: typeof ModalTitleBlock;
  Content: typeof Styles.ContentContainer;
  Footer: typeof Styles.ActionsContainer;
  Tabs: typeof ModalTabs;
}

const classNames: CSSTransitionProps['classNames'] = {
  enter: 'enterFrom',
  enterActive: 'enter',
  enterDone: 'enterTo',
  exit: 'leaveFrom',
  exitActive: 'leave',
  exitDone: 'leaveTo',
};

const Modal: ModalWithSubcomponents = ({
  backdropClosable = true,
  children,
  isOpen,
  onClose,
  destroyOnClose = false,
  type = 'default',
  className,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [trapActive, setTrapActive] = useState<boolean>(false);
  const innerClose = useRef<boolean>(true);
  const [open, setOpen] = useState<boolean>(!!isOpen);

  useEffect(() => {
    if (isOpen) {
      innerClose.current = true;
      setOpen(true);
    } else {
      innerClose.current = false;
      setTrapActive(false);
    }
  }, [isOpen]);

  useEffect(() => {
    // Reenable body scroll if the modal is unmounted while open.
    // This can happen, for example, in Storybook when the story contains an
    // open modal.
    if (container.current != null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      enableBodyScroll(container.current);
    }
  }, [container]);

  const handleEnter = useCallback(() => {
    // Disable body scroll, but persist scrolling for the modal itself.
    if (container.current != null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      disableBodyScroll(container.current, { reserveScrollBarGap: true });
    }
  }, []);

  const handleEntered = useCallback(() => {
    // Trap focus inside the component.
    setTrapActive(true);
  }, []);

  const handleExiting = useCallback(() => {
    // Restore focus to previously focused element.
    setTrapActive(false);
  }, []);

  const handleExited = useCallback(() => {
    // Reenable body scroll.
    if (container.current != null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      enableBodyScroll(container.current);
    }
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleCloseClick = useCallback(() => {
    setTrapActive(false);
  }, []);

  const handleDeactivate = useCallback(() => {
    handleClose();
    if (innerClose.current) {
      innerClose.current = false;
      if (onClose) onClose();
    }
  }, [handleClose, onClose]);

  return (
    <CSSTransition
      appear
      in={open}
      classNames={classNames}
      mountOnEnter={destroyOnClose}
      timeout={TRANSITION_DURATION}
      unmountOnExit={destroyOnClose}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onExit={handleExiting}
      onExited={handleExited}
    >
      <FocusTrap
        active={trapActive}
        focusTrapOptions={{
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          initialFocus: () => closeButton.current!,
          onDeactivate: handleDeactivate,
        }}
      >
        <Styles.Dialog type={type} ref={container} role="dialog" tabIndex={-1}>
          <Styles.Container>
            <Styles.Overlay onClick={backdropClosable ? handleCloseClick : undefined} />

            <Styles.InnerContainer>
              <Styles.Content className={className}>
                <ModalContent isOpen={isOpen} open={open}>
                  {children}
                </ModalContent>
                <Styles.CloseButton ref={closeButton} onClick={handleCloseClick}>
                  <Icon type="close" />
                </Styles.CloseButton>
              </Styles.Content>
            </Styles.InnerContainer>
          </Styles.Container>
        </Styles.Dialog>
      </FocusTrap>
    </CSSTransition>
  );
};

Modal.Header = ModalTitleBlock;
Modal.Content = Styles.ContentContainer;
Modal.Footer = Styles.ActionsContainer;
Modal.Tabs = ModalTabs;

export default Modal;
