import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 504px;
  min-height: 126px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
  background-color: ${({ theme: { colors } }) => colors.White};
`;

export const Title = styled.p`
  width: 100%;
  padding: 12px 16px;
  font-weight: bold;
  letter-spacing: -0.4px;
  color: ${({ theme: { colors } }) => colors.BasicBlack};
  background-color: ${({ theme: { colors } }) => colors.BasicMono};
`;

export const Content = styled.div`
  width: 100%;
  padding: 24px 16px;
`;
