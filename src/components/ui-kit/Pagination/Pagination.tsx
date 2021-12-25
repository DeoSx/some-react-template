import React, { FC, MouseEventHandler } from 'react';
import Icon from '../Icon';
import { PaginationProps } from './types';
import * as Styled from './styles';

const Pagination: FC<PaginationProps> = ({
  className = '',
  count,
  onChange,
  page,
  size = 'small',
}) => {
  const pages: Array<number> = Array.from(Array(count).keys());

  const handlePrevClicked: MouseEventHandler<HTMLButtonElement> = () => {
    if (onChange) {
      onChange(page - 1);
    }
  };

  const handleNextClicked: MouseEventHandler<HTMLButtonElement> = () => {
    if (onChange) {
      onChange(page + 1);
    }
  };

  const handlePageClick = (newPage: number) => {
    if (onChange) {
      onChange(newPage);
    }
  };

  const paginationItems = pages?.map((item) => {
    const paginationCount = 3;
    const paginationItem = (
      <Styled.Item
        key={item}
        className={`${page === item + 1 ? 'active' : ''}`}
        onClick={() => handlePageClick(item + 1)}
      >
        {item + 1}
      </Styled.Item>
    );

    const ellipsisItem = (
      <Styled.Item className="ellipsis" key={item}>
        ...
      </Styled.Item>
    );

    if (count <= paginationCount) {
      return paginationItem;
    }

    /* 1 и последний элемент отображаются при любом условии */
    if (item === 0 || item + 1 === count) {
      return paginationItem;
    }

    /* если активная страница в 1 пятерке */
    if (page < paginationCount) {
      if (item + 1 <= paginationCount) {
        return paginationItem;
      }
      if (item + 1 === 4) {
        return ellipsisItem;
      }
      /* если активная страница больше или равно 5 */
    } else if ((page >= paginationCount || page === count - 2) && page < count - 1) {
      if (item + 1 === page - 1 || item + 1 === page || item + 1 === page + 1) {
        return paginationItem;
      }
      if (item === 1 || item + 1 === count - 1) {
        return ellipsisItem;
      }
    } /* если активная страница в последней четверке */ else if (page > count - 2) {
      if (item + 1 > count - paginationCount) {
        return paginationItem;
      }
      if (item === 1) {
        return ellipsisItem;
      }
    }
    return <div key={item} />;
  });

  return (
    <Styled.Wrapper
      className={`${className} ${size} ${count > 3 ? 'm-many-pages' : 'm-few-pages'}`}
    >
      <Styled.Button disabled={page === 1} onClick={handlePrevClicked}>
        <Icon type="arrowLeft" />
      </Styled.Button>

      <Styled.PaginationContainer>{paginationItems}</Styled.PaginationContainer>
      <Styled.Button disabled={page === count} onClick={handleNextClicked}>
        <Icon type="arrowRight" />
      </Styled.Button>
    </Styled.Wrapper>
  );
};
export default Pagination;
