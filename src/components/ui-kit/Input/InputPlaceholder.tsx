import React, {
  ChangeEventHandler,
  FC,
  useEffect,
  useRef,
  useState,
  useCallback,
  ChangeEvent,
} from 'react';

import * as SD from './styles';
import { InputPlaceholderProps } from './types';

export const InputPlaceholder: FC<InputPlaceholderProps> = ({
  className = '',
  size,
  disabled = false,
  error = false,
  prefix,
  suffix,
  icon,
  iconAtRight,
  showPlaceholder,
  placeholder,
  showReplacement,
  replacement,
  right,
  value,
  onChange: onChangeFn,
  ...args
}) => {
  const [showReset, setShowReset] = useState(!!value);

  useEffect(() => {
    setShowReset(!!value);
  }, [value]);

  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const newVal = event.target.value;
      // Propagate change if exists
      if (onChangeFn) onChangeFn(event);
      // if component is uncontrolled
      if (value == null) {
        setShowReset(!!newVal);
      }
    },
    [onChangeFn, value]
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const reset = useCallback(() => {
    if (onChangeFn) {
      onChangeFn({ target: { value: '' } } as unknown as ChangeEvent);
    }
    if (value == null && inputRef.current) {
      inputRef.current.value = '';
      setShowReset(false);
    }
  }, [onChangeFn, value]);

  return (
    <SD.InputWrapper
      size={size || 'medium'}
      className={`${className} ${disabled && 'disabled'} ${error && 'error'}`}
      {...args}
    >
      {prefix && <SD.Affix mr="8px">{prefix}</SD.Affix>}
      {icon && !iconAtRight && <SD.InputIcon type={icon} mr="8px" />}
      {!right && (
        <SD.Relative>
          {showPlaceholder && <SD.Placeholder>{placeholder}</SD.Placeholder>}
          {showReplacement && <SD.Replacement>{replacement}</SD.Replacement>}
        </SD.Relative>
      )}
      <SD.Input
        ref={inputRef}
        disabled={disabled}
        value={value}
        onChange={onChange}
        right={right}
        hidden={showReplacement}
      />
      {right && (
        <SD.Relative>
          {showPlaceholder && <SD.Placeholder right>{placeholder}</SD.Placeholder>}
          {showReplacement && <SD.Replacement right>{replacement}</SD.Replacement>}
        </SD.Relative>
      )}
      {icon && iconAtRight && <SD.InputIcon type={icon} ml="8px" />}
      {!suffix && !(icon && iconAtRight) && showReset && <SD.Close ml="8px" onClick={reset} />}
      {suffix && <SD.Affix ml="8px">{suffix}</SD.Affix>}
    </SD.InputWrapper>
  );
};
