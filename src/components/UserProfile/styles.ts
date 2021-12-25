import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ProfileImg = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.Grey};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme: { colors } }) => colors.White};
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const Name = styled.p`
  ${({ theme: { fonts } }) => fonts.Sizings.par2};
  color: ${({ theme: { colors } }) => colors.BasicBlack};
  letter-spacing: -0.3px;
`;

export const Role = styled.p`
  ${({ theme: { fonts } }) => fonts.Sizings.par1};
  color: ${({ theme: { colors } }) => colors.BasicGreen};
  letter-spacing: -0.3px;
`;
