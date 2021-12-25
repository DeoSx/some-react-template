import { MouseEvent } from 'react';

export interface PillTabProps {
  className?: string;
  subtext?: string;
  badge?: string;
  active?: boolean;
  oval?: boolean;
  dropdown?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: (event: MouseEvent<HTMLDivElement>, ...args: TODO_ANY) => void;
}

export type TabContainerColors = {
  colors: { active: string; inactive: string };
};

export type Activeable = Pick<PillTabProps, 'active'>;
