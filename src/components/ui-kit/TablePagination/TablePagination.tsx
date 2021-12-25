import React, { FC } from 'react';
import Pagination from '../Pagination';

import * as Style from './style';
import { TablePaginationProps } from './types';

const TablePagination: FC<TablePaginationProps> = ({
  className = '',
  totalPages = 0,
  page = 1,
  perPage,
  onPageChange,
  onPerPageChange,
}) => (
  <Style.Container className={className}>
    {totalPages && (
      <Style.PaginationStyled>
        {perPage && onPerPageChange && (
          <Style.DisplayBy htmlFor="display-by">
            <p>Показать по: </p>
            <Style.ShowButton
              active={perPage === 10}
              size="small"
              colorScheme="white"
              onClick={() => onPerPageChange(10)}
            >
              10
            </Style.ShowButton>
            <Style.ShowButton
              active={perPage === 20}
              size="small"
              colorScheme="white"
              onClick={() => onPerPageChange(20)}
            >
              20
            </Style.ShowButton>
            <Style.ShowButton
              active={perPage === 30}
              size="small"
              colorScheme="white"
              onClick={() => onPerPageChange(30)}
            >
              30
            </Style.ShowButton>
          </Style.DisplayBy>
        )}
        <Pagination count={totalPages} page={page} onChange={onPageChange} />
      </Style.PaginationStyled>
    )}
  </Style.Container>
);

export default TablePagination;
