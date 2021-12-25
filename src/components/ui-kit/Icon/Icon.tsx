import React, { FC } from 'react';

import { iconMap } from './data';
import * as Style from './style';
import { IconProps } from './types';

/**
 * SVG icon.
 */
const Icon: FC<IconProps> = ({ type, ...svgProps }) => {
  return <Style.Container as={iconMap[type]} {...svgProps} />;
};

export default Icon;
