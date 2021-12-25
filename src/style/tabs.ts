import { FlattenSimpleInterpolation } from 'styled-components';
import { BluePrimrose, FirGreen, OldAsphalt, OrangeSunset } from './palettes';
import { Sizings } from './fonts';

export type PillSize = {
  pads: number[];
  font: FlattenSimpleInterpolation;
};

export type PillVariant = {
  activeColor: string;
  onActiveColor: string;
  small: PillSize;
  medium: PillSize;
  large: PillSize;
};

export type PillsStyle = {
  defaultColor: string;
  hoverColor: string;
  subtextColor: string;
  badgeColor: string;
  variants: {
    [key: string]: PillVariant;
  };
};

export const Pills: PillsStyle = {
  defaultColor: OldAsphalt.L80,
  hoverColor: OldAsphalt.L20,
  subtextColor: OldAsphalt.main,
  badgeColor: OrangeSunset.L60,

  variants: {
    rect: {
      activeColor: BluePrimrose.main,
      onActiveColor: '#fff',
      small: {
        pads: [8, 14],
        font: Sizings.Small,
      },
      medium: {
        pads: [8, 16],
        font: Sizings.Normal,
      },
      large: {
        pads: [12, 20],
        font: Sizings.Normal,
      },
    },
    dropdown: {
      activeColor: OldAsphalt.L10,
      onActiveColor: OldAsphalt.L80,
      small: {
        pads: [8, 14],
        font: Sizings.Small,
      },
      medium: {
        pads: [8, 16],
        font: Sizings.Normal,
      },
      large: {
        pads: [12, 20],
        font: Sizings.Normal,
      },
    },
    oval: {
      activeColor: OldAsphalt.L10,
      onActiveColor: OldAsphalt.L80,
      small: {
        pads: [8, 14],
        font: Sizings.Small,
      },
      medium: {
        pads: [10, 16],
        font: Sizings.Normal,
      },
      large: {
        pads: [12, 20],
        font: Sizings.Normal,
      },
    },
  },
};

export const Nav = {
  badgeColor: FirGreen.L40,
  activeColor: BluePrimrose.main,
  inactiveColor: OldAsphalt.L80,
};
