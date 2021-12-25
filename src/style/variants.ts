import { variant } from 'styled-system';

/**
 * Type hinting for styled-component
 *
 * Usage:
 * ```
 * export const Component = styled.div<FontVariantProp>``;
 */
export type FontVariantProp = {
  fontVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'par1' | 'par2' | 'par3';
};

/**
 * Style function to inject in styled component
 *
 * ```
 * export const Component = styled.div<FontVariantProp>`
 *  ${fontVariant}
 * `;
 * ```
 *
 * Usage:
 * ```
 * <Component fontVariant="h1"/>
 * ```
 *
 * [Responsiveness](https://styled-system.com/responsive-styles/) depends on breakpoints in theme:
 * ```
 * {
 *  fontSize: ['32px', '36px'],
 *  lineHeight: ['48px', '52px']
 * }
 */
export const fontVariant = variant({
  prop: 'fontVariant',
  variants: {
    h1: {
      fontSize: '32px',
      lineHeight: '36px',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '28px',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '24px',
    },
    h4: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    h5: {
      fontSize: '16px',
      lineHeight: '22px',
    },
    h6: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    par1: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    par2: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    par3: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
});
