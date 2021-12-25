import React, { FC } from 'react';
import { PillTabProps } from './types';
import { DropdownIcon, PillTabContainer, SubText, Badge } from './styles';

/**
 * Задает css-класс для отображения обычного, dropdown- или oval- компонента
 */
function textStyle(oval: PillTabProps['oval'], dropdown: PillTabProps['dropdown']): string {
  return (oval && 'oval') || (dropdown && 'dropdown') || 'rect';
}

const PillTab: FC<PillTabProps> = ({
  className,
  active,
  size,
  badge,
  subtext,
  oval,
  dropdown,
  children,
  onClick = () => {},
  ...args
}) => {
  return (
    <PillTabContainer
      className={`
        ${active && 'active'}
        ${size || 'medium'}
        ${textStyle(oval, dropdown)}
        ${className}
      `}
      onClick={onClick}
      {...args}
    >
      <span>
        {children}
        {subtext && <SubText>{subtext}</SubText>}
      </span>
      {badge && <Badge>{badge}</Badge>}
      {dropdown && <DropdownIcon type="chevronDown" />}
    </PillTabContainer>
  );
};

export default PillTab;
