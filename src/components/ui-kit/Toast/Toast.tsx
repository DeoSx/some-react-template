import React, { FC, useEffect } from 'react';

// helper
import { Transition } from '@headlessui/react';

// components
import Icon from '../Icon';

// types
import { ToastProps } from './types';

// styles
import {
  ToastDiv,
  ToastText,
  CloseBtn,
  ToastContent,
  ToastTitle,
  ToastActions,
  ToastAction,
} from './style';

const Toast: FC<ToastProps> = ({
  className,
  mode = 'light',
  size = 'small',
  text,
  visible = true,
  title,
  onPrimaryAction,
  onSecondaryAction,
  primaryActionName,
  secondaryActionName,
  iconType = 'star',
  autoHideDelay = 0,
  onClose,
  name,
}) => {
  const closeHandle = () => {
    if (onClose) {
      onClose(`${name || `${mode}_${size}`}`);
    }
  };
  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (autoHideDelay && visible) {
      timeout = setTimeout(() => {
        if (onClose) {
          onClose(`${name || `${mode}_${size}`}`);
        }
      }, autoHideDelay);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoHideDelay, visible]);

  return (
    <Transition
      className={className}
      show={visible}
      as={ToastDiv}
      mode={mode}
      size={size}
      visible={visible}
    >
      {size !== 'small' && <Icon type={iconType} />}
      <ToastContent>
        {title && size === 'large' && <ToastTitle mode={mode}>{title}</ToastTitle>}
        <ToastText mode={mode} itemType={size}>
          {text}
        </ToastText>
        {(primaryActionName || secondaryActionName) && (
          <ToastActions>
            {primaryActionName && (
              <ToastAction mode={mode} onClick={onPrimaryAction} name="primaryAction" size={size}>
                {primaryActionName}
              </ToastAction>
            )}
            {secondaryActionName && (
              <ToastAction
                mode={mode}
                onClick={onSecondaryAction}
                name="secondaryAction"
                size={size}
              >
                {secondaryActionName}
              </ToastAction>
            )}
          </ToastActions>
        )}
      </ToastContent>
      {size !== 'small' && (
        <CloseBtn type="button" onClick={closeHandle} itemType={size} mode={mode}>
          <Icon type="close" />
        </CloseBtn>
      )}
    </Transition>
  );
};

export default Toast;
