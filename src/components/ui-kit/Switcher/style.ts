import styled, { css } from 'styled-components';

import { VisuallyHidden } from '../../../style/mixins';

import { SwitcherSize } from './types';

export const Option = styled.label`
  position: relative;
  flex: 1;

  & + & {
    margin-left: 4px;
  }
`;

export const Input = styled.input`
  ${VisuallyHidden}
`;

export const Label = styled.span`
  display: block;
  padding: 10px 32px;
  white-space: nowrap;
  text-align: center;

  color: ${({ theme }) => theme.colors.Woodsmoke};
  font-size: 12px;
  line-height: 1;

  border-radius: 8px;

  cursor: pointer;

  ${Input}:hover + & {
    background: ${({ theme }) => theme.colors.AthensGray};
  }

  ${Input}:checked + & {
    background: ${({ theme }) => theme.colors.White};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const Icon = styled.svg`
  display: block;

  color: ${({ theme }) => theme.colors.CadetBlue};
  font-size: 24px;

  ${Input}:checked + ${Label} > & {
    color: ${({ theme }) => theme.colors.Waterloo};
  }
`;

export const Container = styled.div<{ size?: SwitcherSize }>`
  display: inline-flex;
  padding: 4px;
  width: 100%;

  background: ${({ theme }) => theme.colors.PassiveGrey};
  border-radius: 8px;

  ${({ size }) =>
    size === 'small' &&
    css`
      ${Option} + ${Option} {
        margin-left: 2px;
      }

      ${Label} {
        padding: 4px 12px;

        font-size: 14px;
      }

      ${Icon} {
        font-size: 20px;
      }
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      ${Option} + ${Option} {
        margin-left: 8px;
      }

      ${Label} {
        padding: 8px 20px;
      }
    `}
`;
