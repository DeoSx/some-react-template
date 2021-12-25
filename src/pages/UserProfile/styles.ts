import styled, { css } from 'styled-components';

const Text = css`
  ${({ theme: { fonts } }) => fonts.Sizings.par2};
  color: ${({ theme: { colors } }) => colors.BasicBlack};
`;

export const Container = styled.div`
  margin: 38px 24px;
`;

export const Content = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.04);
`;

export const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Label = styled.p`
  ${Text};
  width: 100px;
  font-weight: normal;
`;

export const UserName = styled.p`
  ${Text};
  font-weight: bold;
  margin-left: 16px;
`;
