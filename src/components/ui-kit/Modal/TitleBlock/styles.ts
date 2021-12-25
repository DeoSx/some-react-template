import styled from 'styled-components';

export const TitleContainer = styled.div`
  flex: 0;
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.palettes.OldAsphalt.L20};
`;

export const MainTitleLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.fonts.Sizings.H3};
  color: ${({ theme }) => theme.palettes.OldAsphalt.L80};
  width: calc(100% - 32px);
  margin-right: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Subtitle = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.palettes.OldAsphalt.main};
  ${({ theme }) => theme.fonts.Sizings.Normal};
  margin-top: 8px;
`;
