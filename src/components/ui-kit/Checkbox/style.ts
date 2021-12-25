import styled, { css } from 'styled-components';

import { VisuallyHidden } from '../../../style/mixins';

import { CheckboxContainerProps } from './types';

export const Input = styled.input`
  ${VisuallyHidden}
`;

export const Box = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 20px;
  width: 20px;

  background: ${({ theme }) => theme.colors.White};
  border: 1px solid ${({ theme }) => theme.colors.Mischka};
  border-radius: 4px;

  ${Input}:hover + & {
    border-color: ${({ theme }) => theme.colors.Chambray};
  }

  ${Input}:checked + & {
    background: ${({ theme }) => theme.colors.Chambray};
    border-color: ${({ theme }) => theme.colors.Chambray};
  }
`;

export const Icon = styled.svg`
  visibility: hidden;

  margin: auto;

  color: ${({ theme }) => theme.colors.White};
  font-size: 11px;

  ${Input}:checked + ${Box} > & {
    visibility: visible;
  }
`;

export const Label = styled.span`
  display: flex;
  margin-left: 12px;

  color: ${({ theme }) => theme.colors.Woodsmoke};
  font-size: 16px;
  line-height: 1.5;
`;

export const Container = styled.label<CheckboxContainerProps>`
  width: max-content;
  position: relative;

  align-items: baseline;
  display: inline-flex;

  ${({ error }) =>
    error &&
    css`
      ${Box} {
        border-color: ${({ theme }) => theme.colors.BrickRed};
      }

      ${Input}:hover + ${Box} {
        border-color: ${({ theme }) => theme.colors.BrickRed};
      }

      ${Input}:checked + ${Box} {
        background: ${({ theme }) => theme.colors.BrickRed};
        border-color: ${({ theme }) => theme.colors.BrickRed};
      }

      ${Label} {
        color: ${({ theme }) => theme.colors.BrickRed};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      ${Input}:hover + ${Box} {
        border-color: ${({ theme }) => theme.colors.Mischka};
      }

      ${Input}:checked + ${Box} {
        background: ${({ theme }) => theme.colors.AthensGray};
        border-color: ${({ theme }) => theme.colors.Mischka};
      }

      ${Icon} {
        color: ${({ theme }) => theme.colors.CadetBlue};
      }

      ${Label} {
        color: ${({ theme }) => theme.colors.Waterloo};
      }
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      ${Box} {
        height: 16px;
        width: 16px;
      }

      ${Icon} {
        font-size: 9px;
      }

      ${Label} {
        ${({ theme: { fonts } }) => fonts.Sizings.par1};
        margin-left: 12px;
      }
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      ${Box} {
        height: 24px;
        width: 24px;
      }

      ${Icon} {
        font-size: 13px;
      }
    `}

  ${({ checked, disabled, error, hasBackground, size, theme }) =>
    hasBackground &&
    css`
      display: flex;
      padding: ${size === 'small' ? '8px 12px' : '12px 16px'};

      background: ${theme.colors.White};
      border: 1px solid ${theme.colors.AthensGray};
      border-radius: 8px;

      &:hover {
        background: ${theme.colors.CatskillWhite};
        border-color: ${theme.colors.CatskillWhite};
      }

      ${checked &&
      css`
        background: ${theme.colors.Soltitude};
        border-color: ${theme.colors.Soltitude};

        &:hover {
          background: ${theme.colors.Soltitude};
          border-color: ${theme.colors.Soltitude};
        }
      `}

      ${disabled &&
      css`
        background: ${checked ? theme.colors.CatskillWhite : theme.colors.AthensGray};
        border-color: ${checked ? theme.colors.CatskillWhite : theme.colors.White};

        &:hover {
          background: ${checked ? theme.colors.CatskillWhite : theme.colors.AthensGray};
          border-color: ${checked ? theme.colors.CatskillWhite : theme.colors.White};
        }
      `}

      ${error &&
      css`
        background: ${theme.colors.CarouselPink};
        border-color: ${theme.colors.CarouselPink};

        &:hover {
          background: ${theme.colors.CarouselPink};
          border-color: ${theme.colors.CarouselPink};
        }
      `}
    `}
`;
