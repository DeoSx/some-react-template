import { css } from 'styled-components';

export const Variants = {
  Regular: css`
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: 400;
  `,

  Medium: css`
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: 500;
  `,

  SemiBold: css`
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: 600;
  `,

  Bold: css`
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: 700;
  `,

  Heavy: css`
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: 800;
  `,
};

export const Sizings = {
  H1: css`
    font-size: 32px;
    line-height: 36px;
  `,
  H2: css`
    font-size: 24px;
    line-height: 28px;
  `,
  H3: css`
    font-size: 20px;
    line-height: 24px;
  `,
  H4: css`
    font-size: 18px;
    line-height: 24px;
  `,
  H5: css`
    font-size: 16px;
    line-height: 20px;
  `,
  H6: css`
    font-size: 14px;
    line-height: 20px;
  `,
  par0: css`
    font-size: 9px;
    line-height: 16px;
  `,
  par1: css`
    font-size: 12px;
    line-height: 20px;
  `,
  par2: css`
    font-size: 14px;
    line-height: 24px;
  `,
  par3: css`
    font-size: 16px;
    line-height: 26px;
  `,
  par4: css`
    font-size: 18px;
    line-height: 28px;
  `,
  Title: css`
    font-size: 24px;
    line-height: 34px;
  `,
  /** @deprecated */
  Normal: css`
    font-size: 16px;
    line-height: 24px;
  `,
  /** @deprecated */
  Small: css`
    font-size: 14px;
    line-height: 20px;
  `,
  /** @deprecated */
  XSmall: css`
    font-size: 12px;
    line-height: 16px;
  `,
};

export default {
  Sizings,
  Variants,
};
