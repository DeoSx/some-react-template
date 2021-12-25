import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const Text = styled.div`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.Waterloo};
  font-size: 14px;
  line-height: 1.5;
`;

export const PaginationStyled = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DisplayBy = styled.label`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.Sizings.H6};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.Rhino};
  margin-right: 22px;
  white-space: nowrap;
  justify-content: space-between;
`;

export const ShowButton = styled(Button)<{ active: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-weight: bold;
  color: ${({ active, theme: { colors } }) => (active ? colors.DarkBlue : colors.Grey)};
  margin-left: 8px;
  background-color: ${({ active, theme: { colors } }) =>
    active ? colors.LightGrey : colors.White};
`;
