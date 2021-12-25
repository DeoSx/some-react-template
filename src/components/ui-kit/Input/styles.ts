import styled, { css } from 'styled-components';
import {
  flexbox,
  space,
  FlexboxProps,
  SpaceProps,
  variant,
  PositionProps,
  position,
} from 'styled-system';

import { BluePrimrose, OldAsphalt, RedRose } from '../../../style/palettes';
import { fontVariant } from '../../../style/variants';
import Icon from '../Icon';
import { InputProps, TRight } from './types';

export const Close = styled(Icon).attrs({ type: 'close' })<SpaceProps>`
  ${space};
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: ${OldAsphalt.L40};
`;

/**
 * Font styles for different sizes
 */
const sizeToFont = {
  small: 'par2',
  medium: 'par1',
  large: 'par1',
};

type TsizeToFont = typeof sizeToFont;

export const InputWrapperBase = styled.div.attrs((prop: { size: keyof TsizeToFont }) => ({
  fontVariant: sizeToFont[prop.size],
}))<FlexboxProps & PositionProps & SpaceProps & Pick<InputProps, 'size'>>(
  flexbox,
  space,
  position,
  fontVariant,
  variant({
    prop: 'size',
    variants: {
      small: {
        py: '7px',
        px: '15px',
      },
      medium: {
        py: '7px',
        px: '15px',
      },
      large: {
        py: '11px',
        px: '15px',
      },
    },
  })
);

export const InputWrapper = styled(InputWrapperBase).attrs(() => ({
  $styled: {
    disabledBackground: OldAsphalt.L10,
    border: {
      default: OldAsphalt.L20,
      hover: OldAsphalt.main,
      focus: BluePrimrose.main,
      error: RedRose.main,
    },
  },
}))<FlexboxProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  min-width: 280px;
  border: 1px solid ${({ $styled }) => $styled.border.default};

  &:hover,
  &.hover {
    border: 1px solid ${({ $styled }) => $styled.border.hover};
  }

  &:focus-within,
  &.focus {
    border: 1px solid ${({ $styled }) => $styled.border.focus};
  }

  &.error {
    border: 1px solid ${({ $styled }) => $styled.border.error};
  }

  &.disabled {
    border: 1px solid ${({ $styled }) => $styled.border.default};
    background: ${({ $styled }) => $styled.disabledBackground};
  }
`;

export const Affix = styled.div.attrs(() => ({
  $styled: {
    color: OldAsphalt.main,
    disabled: OldAsphalt.L40,
  },
}))<SpaceProps>`
  ${space};

  color: ${({ $styled }) => $styled.color};

  ${InputWrapper}.disabled & {
    color: ${({ $styled }) => $styled.disabled};
  }
`;

type HideBlurred = { hide?: boolean };

export const Input = styled.input.attrs(() => ({
  $styled: {
    color: OldAsphalt.L80,
    placeholder: {
      default: OldAsphalt.L40,
      focusedColor: OldAsphalt.L20,
      disabled: OldAsphalt.main,
    },
  },
}))<HideBlurred & TRight>`
  border: none;
  outline: none;
  padding: 0;
  background: none;
  font: inherit;
  line-height: inherit;
  flex: 1;
  width: 1em;
  color: ${({ $styled }) => $styled.color};

  ${(props) =>
    props.right &&
    css`
      text-align: right;
    `};

  &[hidden] {
    display: block;
    opacity: 0;
  }

  ${InputWrapper}:focus-within &[hidden], ${InputWrapper}.focus &[hidden] {
    visibility: visible;
    opacity: 1;
  }

  &::placeholder {
    color: ${({ $styled }) => $styled.placeholder.default};
  }

  ${InputWrapper}:focus-within &::placeholder,
  ${InputWrapper}.focus &::placeholder {
    color: ${({ $styled }) => $styled.placeholder.focusedColor};
  }

  ${InputWrapper}.disabled &::placeholder {
    color: ${({ $styled }) => $styled.placeholder.disabled};
  }
`;

export const InputIcon = styled(Icon).attrs(() => ({
  $styled: {
    color: OldAsphalt.L40,
    hover: OldAsphalt.main,
    focus: BluePrimrose.main,
    error: RedRose.main,
  },
}))<SpaceProps>`
  ${space};
  width: 20px;
  height: 20px;

  color: ${({ $styled }) => $styled.color};

  ${InputWrapper}:hover &, ${InputWrapper}.hover & {
    color: ${({ $styled }) => $styled.hover};
  }

  ${InputWrapper}:focus-within &, ${InputWrapper}.focus & {
    color: ${({ $styled }) => $styled.focus};
  }

  ${InputWrapper}.error & {
    color: ${({ $styled }) => $styled.error};
  }
`;

export const Placeholder = styled.div<TRight>`
  position: absolute;
  ${(props) =>
    props.right &&
    css`
      right: 0;
    `};
  z-index: -1;
  white-space: nowrap;
  color: ${OldAsphalt.L40};
`;

export const Replacement = styled.div<TRight>`
  position: absolute;
  ${(props) =>
    props.right &&
    css`
      right: 0;
    `};
  pointer-events: none;
  white-space: nowrap;
  ${InputWrapper}:focus-within &, ${InputWrapper}.focus & {
    visibility: hidden;
  }
`;

export const Relative = styled.div`
  position: relative;
  align-self: flex-start;
  width: 0;
`;
