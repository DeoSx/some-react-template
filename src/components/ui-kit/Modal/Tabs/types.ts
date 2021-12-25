import { ReactNode } from 'react';

interface ModalTab {
  title: string;
  content: TODO_ANY;
  filters: TODO_ANY;
}

export interface ModalTabsProps {
  data?: ModalTab[];
  renderContent?: (content: ModalTab['content']) => ReactNode;
  renderFilters?: (filters: ModalTab['filters']) => ReactNode;
  actions?: ReactNode[];
}
