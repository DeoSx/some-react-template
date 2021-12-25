import React, { ChangeEventHandler, useCallback, useEffect, useRef, useState } from 'react';

import { InputProps } from './types';
import * as Styled from './styles';
import { useCombinedRefs } from './utils';

const disabledPlaceholder = 'Поле недоступно для ввода';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      size,
      disabled = false,
      error = false,
      prefix,
      suffix,
      icon,
      iconAtRight,
      type,
      value,
      placeholder = 'Введите значение...',
      onChange: onChangeFn,
      onKeyPress = () => {},
      ...args
    },
    ref
  ) => {
    const [showReset, setShowReset] = useState(!!value);

    useEffect(() => {
      setShowReset(!!value);
    }, [value]);

    const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
      (event) => {
        const newVal = event.target.value;
        // Propagate change if exists
        if (onChangeFn) onChangeFn(newVal);
        // if component is uncontrolled
        if (value == null) {
          setShowReset(!!newVal);
        }
      },
      [onChangeFn, value]
    );
    const fallbackRef = useRef<HTMLInputElement>(null);
    const inputRef = useCombinedRefs(fallbackRef, ref);
    const reset = useCallback(() => {
      if (onChangeFn) {
        onChangeFn('');
      }
      if (value == null && inputRef.current) {
        inputRef.current.value = '';
        setShowReset(false);
      }
    }, [onChangeFn, value, inputRef]);

    return (
      <Styled.InputWrapper
        size={size || 'medium'}
        className={`${className} ${disabled && 'disabled'} ${error && 'error'}`}
        {...args}
      >
        {prefix && <Styled.Affix mr="8px">{prefix}</Styled.Affix>}
        {icon && !iconAtRight && <Styled.InputIcon type={icon} mr="8px" />}
        <Styled.Input
          ref={inputRef}
          type={type}
          placeholder={(disabled && disabledPlaceholder) || placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          // @ts-ignore
          onKeyPress={onKeyPress}
        />

        {icon && iconAtRight && <Styled.InputIcon type={icon} ml="8px" />}
        {!disabled && !suffix && !(icon && iconAtRight) && showReset && (
          <Styled.Close ml="8px" onClick={reset} />
        )}
        {suffix && <Styled.Affix ml="8px">{suffix}</Styled.Affix>}
      </Styled.InputWrapper>
    );
  }
);

export default Input;
