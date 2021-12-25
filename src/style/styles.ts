import styled from 'styled-components';
import theme from './theme';

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
`;

export const AppContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.MainContent};
`;
