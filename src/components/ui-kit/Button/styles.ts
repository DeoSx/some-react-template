import styled, { css, keyframes } from 'styled-components';
import Icon from '../Icon';

import { ButtonColorScheme } from './types';
import { badgeColorScheme, filledColorScheme, roundedColorScheme } from './data';

export const Children = styled.div<{ isLoading: boolean }>`
  ${({ isLoading }) => (isLoading ? `visibility: hidden;` : '')};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Rotate360 = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

export const Loader = styled(Icon)`
  width: 24px;
  height: 24px;
  animation: 5s linear infinite ${Rotate360};
`;

export const LeftBand = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 34px;
`;

export const LoaderWrapper = styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BaseButton = styled.button`
  flex: 0 0 auto;
  line-height: 20px;
  white-space: nowrap;
  padding: 8px 24px;
  border-radius: 8px;
  box-sizing: border-box;
  border: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: max-content;

  &.medium,
  &.large {
  }

  &.large {
    padding: 12px 24px;
  }

  &.small {
  }

  &:disabled {
    cursor: default;
  }
`;

export function padding(pads: number[]): string {
  return pads.map((p) => `${p}px`).join(' ');
}

export const FilledButton = styled(BaseButton)<{ colorScheme: ButtonColorScheme }>`
  position: relative;

  color: ${({ colorScheme }) => filledColorScheme[colorScheme].color.primary};
  background: ${({ colorScheme }) => filledColorScheme[colorScheme].background.default};

  &:hover,
  &.hover {
    background: ${({ colorScheme }) => filledColorScheme[colorScheme].background.hover};
    color: ${({ colorScheme }) => filledColorScheme[colorScheme].color.secondary};
  }

  &:active,
  &.active {
    background: ${({ colorScheme }) => filledColorScheme[colorScheme].background.active};
    color: ${({ colorScheme }) => filledColorScheme[colorScheme].color.secondary};
  }

  &:disabled {
    background: ${({ colorScheme }) => filledColorScheme[colorScheme].background.disabled};
    color: ${({ colorScheme }) => filledColorScheme[colorScheme].color.disabled};
  }

  &.loading {
    background: ${({ colorScheme }) => filledColorScheme[colorScheme].background.loading};
  }

  ${Loader} {
    color: ${({ colorScheme }) => filledColorScheme[colorScheme].color.loader};
  }

  ${LeftBand} {
    background: ${({ colorScheme }) => filledColorScheme[colorScheme].background.band};
  }

  &.small.icon-only {
    padding: 8px;
  }

  &.medium.icon-only {
    padding: 10px;
  }

  &.large.icon-only {
    padding: 14px;
  }
`;

const roundedVariant = (className: string, pad: number) => css`
  &&&.${className}.icon-only {
    padding: ${padding([pad])};

    &:hover,
    &.hover,
    &:active,
    &.active {
      padding: ${padding([pad])};
    }

    &:disabled {
      padding: ${padding([pad])};
    }
  }
`;

export const RoundedButton = styled(FilledButton).attrs({
  styled: {
    padding: [6.5, 22.5],
    largePadding: [10.5, 22.5],
    iconPadding: [6.5, 8.5, 12.5],
  },
})<{ colorScheme: ButtonColorScheme }>`
  border: 1px solid ${({ colorScheme }) => roundedColorScheme[colorScheme].color.primary};
  background: ${({ colorScheme }) => roundedColorScheme[colorScheme].background.default};
  color: ${({ colorScheme }) => roundedColorScheme[colorScheme].color.primary};
  padding: ${(attrs) => padding(attrs.styled.padding)};

  &.large {
    padding: ${(attrs) => padding(attrs.styled.largePadding)};
  }

  &:hover,
  &.hover {
    border-color: transparent;
    background: ${({ colorScheme }) => roundedColorScheme[colorScheme].background.hover};
    color: ${({ colorScheme }) => roundedColorScheme[colorScheme].color.secondary};
  }

  &:active,
  &.active {
    border-color: transparent;
    background: ${({ colorScheme }) => roundedColorScheme[colorScheme].background.active};
    color: ${({ colorScheme }) => roundedColorScheme[colorScheme].color.secondary};
  }

  &:disabled {
    border: 1px solid ${({ colorScheme }) => roundedColorScheme[colorScheme].color.disabled};
    background: ${({ colorScheme }) => roundedColorScheme[colorScheme].background.disabled};
    color: ${({ colorScheme }) => roundedColorScheme[colorScheme].color.disabled};
  }

  ${Loader} {
    color: ${({ colorScheme }) => roundedColorScheme[colorScheme].color.loader};
  }

  ${LeftBand} {
    background: ${({ colorScheme }) => roundedColorScheme[colorScheme].background.band};
  }

  ${(attrs) => roundedVariant('small', attrs.styled.iconPadding[0])}
  ${(attrs) => roundedVariant('medium', attrs.styled.iconPadding[1])}
  ${(attrs) => roundedVariant('large', attrs.styled.iconPadding[2])}
`;

export const Badge = styled.div<{ colorScheme: ButtonColorScheme }>`
  ${(props) => props.theme.fonts.Variants.Bold};
  ${(props) => props.theme.fonts.Sizings.par2};
  padding: 2px 8px;
  border-radius: 20px;
  margin-left: 12px;

  ${FilledButton} & {
    color: ${({ colorScheme }) => badgeColorScheme[colorScheme].color.default};
    background: ${({ colorScheme }) => badgeColorScheme[colorScheme].background.default};
  }

  ${FilledButton}.hover &, ${FilledButton}:hover & {
    color: ${({ colorScheme }) => badgeColorScheme[colorScheme].color.hover};
    background: ${({ colorScheme }) => badgeColorScheme[colorScheme].background.hover};
  }

  ${FilledButton}.active &, ${FilledButton}:active & {
    color: ${({ colorScheme }) => badgeColorScheme[colorScheme].color.active};
    background: ${({ colorScheme }) => badgeColorScheme[colorScheme].background.active};
  }

  ${FilledButton}:disabled & {
    color: ${({ colorScheme }) => badgeColorScheme[colorScheme].color.disabled};
    background: ${({ colorScheme }) => badgeColorScheme[colorScheme].background.disabled};
  }
`;

export const ButtonIcon = styled.svg`
  width: 20px;
  height: 20px;

  ${BaseButton}.icon-left & {
    margin-right: 8px;
  }

  ${BaseButton}.icon-right & {
    margin-left: 8px;
  }
`;
