export interface TablePaginationProps {
  className?: string;
  from?: number;
  to?: number;
  total?: number;
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  perPage?: number;
  onPerPageChange?: (perPage: number) => void;
}
