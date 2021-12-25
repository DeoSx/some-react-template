import React, { FC, ReactNode, useEffect, useState } from 'react';
import { ModalContentProps } from './types';

const ModalContent: FC<ModalContentProps> = ({ isOpen = false, open = false, children }) => {
  const [currentChildren, setCurrentChildren] = useState<ReactNode>(children);

  useEffect(() => {
    if (isOpen && open) {
      setCurrentChildren(children);
    }
  }, [children, isOpen, open]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{currentChildren}</>;
};

export default ModalContent;
