import theme from '../../../style/theme';
import { BadgeColors, ButtonColorScheme, FilledColors, RoundedColors } from './types';

export const filledColorScheme: Record<ButtonColorScheme, FilledColors> = {
  blue: {
    color: {
      primary: theme.colors.White,
      secondary: theme.colors.White,
      disabled: theme.colors.White,
      loader: theme.colors.White,
    },
    background: {
      default: theme.colors.Chambray,
      hover: theme.colors.DodgerBlue,
      active: theme.colors.Rhino,
      disabled: 'rgba(0, 85, 203, 0.4)', // Chambray
      loading: 'rgba(0, 85, 203, 0.4)', // Chambray
      band: 'rgba(0, 68, 162, 0.1)', // Cobalt
    },
  },
  green: {
    color: {
      primary: theme.colors.White,
      secondary: theme.colors.White,
      disabled: theme.colors.White,
      loader: theme.colors.White,
    },
    background: {
      default: theme.colors.ForestGreen,
      hover: theme.colors.Apple,
      active: theme.colors.ForestGreen,
      disabled: 'rgba(42, 113, 40, 0.4)', // ForestGreen
      loading: 'rgba(42, 113, 40, 0.4)', // ForestGreen
      band: 'rgba(42, 113, 40, 0.1)', // ForestGreen
    },
  },
  red: {
    color: {
      primary: theme.colors.White,
      secondary: theme.colors.White,
      disabled: theme.colors.White,
      loader: theme.colors.White,
    },
    background: {
      default: theme.colors.MexicanRed,
      hover: theme.colors.BrickRed,
      active: theme.colors.Cherrywood,
      disabled: 'rgba(163, 33, 42, 0.4)', // MexicanRed
      loading: 'rgba(163, 33, 42, 0.4)', // MexicanRed
      band: 'rgba(163, 33, 42, 0.1)', // MexicanRed
    },
  },
  purple: {
    color: {
      primary: theme.colors.White,
      secondary: theme.colors.White,
      disabled: theme.colors.White,
      loader: theme.colors.White,
    },
    background: {
      default: theme.colors.Deluge,
      hover: theme.colors.Amethyst,
      active: theme.colors.Deluge,
      disabled: 'rgba(96, 55, 128, 0.4)', // Eminence
      loading: 'rgba(96, 55, 128, 0.4)', // Eminence
      band: 'rgba(96, 55, 128, 0.1)', // Eminence
    },
  },
  white: {
    color: {
      primary: theme.colors.DarkBlue,
      secondary: theme.colors.BasicBlack,
      disabled: theme.colors.Grey,
      loader: theme.colors.Grey,
    },
    background: {
      default: theme.colors.White,
      hover: theme.colors.PigeonPost,
      active: theme.colors.Waterloo,
      disabled: 'rgba(96, 55, 128, 0.4)',
      loading: 'rgba(96, 55, 128, 0.4)',
      band: 'rgba(96, 55, 128, 0.1)',
    },
  },
  none: {
    color: {
      primary: theme.colors.DarkBlue,
      secondary: theme.colors.Black,
      disabled: 'transparent',
      loader: 'transparent',
    },
    background: {
      default: 'transparent',
      hover: 'transparent',
      active: 'transparent',
      disabled: 'transparent',
      loading: 'transparent',
      band: 'transparent',
    },
  },
};

export const roundedColorScheme: Record<ButtonColorScheme, RoundedColors> = {
  blue: {
    color: {
      primary: theme.colors.DodgerBlue,
      secondary: theme.colors.White,
      disabled: 'rgba(0, 85, 203, 0.4)', // Chambray
      loader: theme.colors.DodgerBlue,
    },
    background: {
      default: 'transparent',
      hover: theme.colors.DodgerBlue,
      active: theme.colors.Rhino,
      disabled: 'transparent',
      band: 'rgba(0, 85, 203, 0.2)', // Chambray
    },
  },
  green: {
    color: {
      primary: theme.colors.ForestGreen,
      secondary: theme.colors.White,
      disabled: 'rgba(42, 113, 40, 0.4)', // ForestGreen
      loader: theme.colors.ForestGreen,
    },
    background: {
      default: 'transparent',
      hover: theme.colors.Apple,
      active: theme.colors.ForestGreen,
      disabled: 'transparent',
      band: 'rgba(42, 113, 40, 0.2)', // ForestGreen
    },
  },
  red: {
    color: {
      primary: theme.colors.MexicanRed,
      secondary: theme.colors.White,
      disabled: 'rgba(163, 33, 42, 0.4)', // MexicanRed
      loader: theme.colors.MexicanRed,
    },
    background: {
      default: 'transparent',
      hover: theme.colors.BrickRed,
      active: theme.colors.Cherrywood,
      disabled: 'transparent',
      band: 'rgba(163, 33, 42, 0.2)', // MexicanRed
    },
  },
  purple: {
    color: {
      primary: theme.colors.Deluge,
      secondary: theme.colors.White,
      disabled: 'rgba(96, 55, 128, 0.4)', // Eminence
      loader: theme.colors.Deluge,
    },
    background: {
      default: 'transparent',
      hover: theme.colors.Amethyst,
      active: theme.colors.Deluge,
      disabled: 'transparent',
      band: 'rgba(96, 55, 128, 0.2)', // Eminence
    },
  },
  white: {
    color: {
      primary: theme.colors.DarkBlue,
      secondary: theme.colors.BasicBlack,
      disabled: 'rgba(96, 55, 128, 0.4)',
      loader: theme.colors.Grey,
    },
    background: {
      default: 'transparent',
      hover: theme.colors.LightGrey,
      active: theme.colors.Deluge,
      disabled: 'transparent',
      band: 'rgba(96, 55, 128, 0.2)', // Eminence
    },
  },
  none: {
    color: {
      primary: 'transparent',
      secondary: 'transparent',
      disabled: 'transparent',
      loader: 'transparent',
    },
    background: {
      default: 'transparent',
      hover: 'transparent',
      active: 'transparent',
      disabled: 'transparent',
      band: 'transparent',
    },
  },
};

export const badgeColorScheme: Record<ButtonColorScheme, BadgeColors> = {
  blue: {
    color: {
      default: theme.colors.White,
      hover: theme.colors.FunBlue,
      active: theme.colors.White,
      disabled: theme.colors.White,
    },
    background: {
      default: theme.colors.FunBlue,
      hover: theme.colors.White,
      active: theme.colors.FunBlue,
      disabled: 'rgba(30, 91, 175, 0.4)', // FunBlue
    },
  },
  green: {
    color: {
      default: theme.colors.White,
      hover: theme.colors.Apple,
      active: theme.colors.White,
      disabled: theme.colors.White,
    },
    background: {
      default: theme.colors.Apple,
      hover: theme.colors.White,
      active: theme.colors.Apple,
      disabled: 'rgba(55, 154, 52, 0.4)', // Apple
    },
  },
  red: {
    color: {
      default: theme.colors.White,
      hover: theme.colors.BrickRed,
      active: theme.colors.White,
      disabled: theme.colors.White,
    },
    background: {
      default: theme.colors.BrickRed,
      hover: theme.colors.White,
      active: theme.colors.BrickRed,
      disabled: 'rgba(204, 42, 53, 0.4)', // BrickRed
    },
  },
  purple: {
    color: {
      default: theme.colors.White,
      hover: theme.colors.Amethyst,
      active: theme.colors.White,
      disabled: theme.colors.White,
    },
    background: {
      default: theme.colors.Amethyst,
      hover: theme.colors.White,
      active: theme.colors.Amethyst,
      disabled: 'rgba(145, 76, 200, 0.4)', // Amethyst
    },
  },
  white: {
    color: {
      default: theme.colors.DarkBlue,
      hover: theme.colors.BasicBlack,
      active: theme.colors.Grey,
      disabled: theme.colors.Grey,
    },
    background: {
      default: theme.colors.White,
      hover: theme.colors.LightGrey,
      active: theme.colors.Amethyst,
      disabled: 'rgba(145, 76, 200, 0.4)', // Amethyst
    },
  },
  none: {
    color: {
      default: 'red',
      hover: 'transparent',
      active: 'transparent',
      disabled: 'transparent',
    },
    background: {
      default: 'transparent',
      hover: 'transparent',
      active: 'transparent',
      disabled: 'transparent',
    },
  },
};
