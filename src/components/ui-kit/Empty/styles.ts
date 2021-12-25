import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme: { fonts } }) => fonts.Sizings.par3};
  color: ${({ theme: { colors } }) => colors.BasicGrey};
  letter-spacing: -0.355556px;
  padding: 20px 0;
`;
