import styled, { css } from 'styled-components';

import { PillSize, PillVariant } from '../../../style/tabs';
import Icon from '../Icon';
import { PillTabProps } from './types';

export const SubText = styled.span.attrs((props) => ({
  color: props.theme.tabs.Pills.subtextColor,
}))`
  color: ${(attrs) => attrs.color};
  margin-left: 8px;
`;

export const DropdownIcon = styled(Icon)`
  margin-left: 8px;
`;

/**
 * Массив чисел в строку '##px ...'
 */
export function padding(pads: number[]): string {
  return pads.map((p) => `${p}px`).join(' ');
}

/**
 * Массив чисел (минус размер border'a) в строку '##px ...'
 */
export function paddingWithBorder(border: number, pads: number[]): string {
  return padding(pads.map((pad) => pad - border));
}

export const Badge = styled.span.attrs((props) => ({
  color: props.theme.tabs.Pills.badgeColor,
}))`
  ${(props) => props.theme.fonts.Variants.Bold}
  ${(props) => props.theme.fonts.Sizings.XSmall}
  color: ${(attrs) => attrs.color};

  margin-left: 8px;
  padding: 1px 7px;

  border-radius: 20px;
  border: 1px solid ${(attrs) => attrs.color};
`;

/**
 * Задает размеры padding и шрифта в обычном состоянии и :hover
 */
function variant({ pads, font }: PillSize) {
  return css`
    ${font};
    padding: ${padding(pads)};

    &.hover,
    &:hover {
      padding: ${paddingWithBorder(1, pads)};
    }
  `;
}

/**
 * Задает цвета и размеры для отдельного стиля Pill
 */
function cssStyle(attrs: PillVariant) {
  return css`
    &.active,
    &:active {
      background: ${attrs.activeColor};
      color: ${attrs.onActiveColor};

      ${SubText} {
        color: ${attrs.onActiveColor};
      }

      ${Badge} {
        color: ${attrs.onActiveColor};
        border-color: ${attrs.onActiveColor};
      }
    }

    &.small {
      ${variant(attrs.small)}
    }

    &.medium {
      ${variant(attrs.medium)}
    }

    &.large {
      ${variant(attrs.large)}
    }
  `;
}

export const PillTabContainer = styled.div.attrs((props) => props.theme.tabs.Pills)<PillTabProps>`
  ${(props) => props.theme.utils.FlexCentered}
  color: ${(props) => props.defaultColor};
  cursor: pointer;

  border-radius: 8px;

  ${(props) => props.theme.fonts.Variants.Regular}
  ${DropdownIcon} {
    margin-left: 8px;
  }

  &.active,
  &:active {
    ${(props) => props.theme.fonts.Variants.Medium}
    ${DropdownIcon} {
      transform: rotateZ(180deg);
    }
  }

  &.hover,
  &:hover {
    border: 1px solid ${(props) => props.hoverColor};
  }

  &.rect {
    ${(attrs) => cssStyle(attrs.variants.rect)}
  }

  &.dropdown {
    ${(attrs) => cssStyle(attrs.variants.dropdown)}
  }

  &.oval {
    ${(attrs) => cssStyle(attrs.variants.oval)}

    border-radius: 100px;
  }
`;
