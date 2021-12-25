export interface PaginationProps {
  /** Class to customization pagination. */
  className?: string;
  /** Total pages count */
  count: number;
  /** Handler on page click. */
  onChange?: (page: number) => void;
  /** Active page. */
  page: number;
  /** Size of pagination items */
  size?: 'small' | 'large';
}
