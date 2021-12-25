import { HTMLAttributes } from 'react';

import { iconMap } from './data';

export type IconType = keyof typeof iconMap;

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  /** The type of the icon. */
  type: IconType;
}
