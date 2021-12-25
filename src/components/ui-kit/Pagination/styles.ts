import styled from 'styled-components';

// ui-kit styles for all SVG icons.
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
  border-radius: 8px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  .small & {
    width: 32px;
    height: 32px;
  }

  .large & {
    width: 40px;
    height: 40px;

    & > svg {
      transform: scale(1.4);
    }
  }

  .m-few-pages & {
    &:first-child {
      margin-right: 8px;
    }

    &:last-child {
      margin-left: 8px;
    }
  }

  .m-many-pages & {
    &:first-child {
      margin-right: 8px;
    }

    &:last-child {
      margin-left: 8px;
    }
  }

  &:disabled {
    cursor: default;
  }
  &:hover:not(:disabled) {
    background-color: ${({ theme: { colors } }) => colors.CatskillWhite};
  }

  svg {
    width: 1em;
    height: 1em;
    color: ${({ theme: { colors } }) => colors.DarkBlue};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;

  .small.m-few-pages & {
    margin: 0 -12px;
  }

  .large.m-few-pages & {
    margin: 0 -8px;
  }
  .m-many-pages & {
    margin: 0 -2px;
  }
`;

export const Item = styled.div`
  color: #0c0d10;
  border-radius: 8px;

  &:hover:not(.ellipsis):not(.active) {
    cursor: pointer;
  }
  &:hover:not(.active):not(.ellipsis) {
    background-color: ${({ theme: { colors } }) => colors.CatskillWhite};
  }

  .large & {
    font-size: 16px;
    line-height: 24px;
    padding: 8px 15px;
  }

  .small & {
    font-size: 14px;
    line-height: 20px;
    padding: 6px 12px;
  }

  .small.m-few-pages & {
    margin: 0 4px;
  }

  .large.m-few-pages & {
    margin: 0 8px;
  }
  .m-many-pages & {
    margin: 0 2px;
  }

  &.active {
    color: ${({ theme: { colors } }) => colors.White};
    background-color: ${({ theme: { colors } }) => colors.Waterloo};
  }
`;
