import styled from 'styled-components';
import PillTab from '../../PillTab';

export const ModalTabsContainer = styled.div`
  background-color: ${({ theme }) => theme.palettes.OldAsphalt.L10};
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`;

export const ModalTabsHeader = styled.div`
  flex: 0;
  width: 100%;
  padding: 20px 32px;
  background-color: ${({ theme }) => theme.colors.White};
  border-bottom: 1px solid ${({ theme }) => theme.palettes.OldAsphalt.L20};
  display: flex;
  align-items: center;
`;

export const ModalTabsList = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 16px;
`;

export const StyledPillTab = styled(PillTab)`
  &:not(&:last-child) {
    margin-right: 16px;
  }
`;

export const ModalTabsActions = styled.div`
  flex: 0;
  margin-left: auto;
  display: flex;
  align-items: center;

  * + * {
    margin-left: 16px;
  }
`;

export const ModalTabsContent = styled.div`
  flex: 1;
  width: 100%;
  height: 1px;
  position: relative;
`;

export const ModalTabsContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ModalTabsFilters = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  width: 25%;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 0.2s linear;
  background-color: ${({ theme }) => theme.colors.White};
  border-left: ${({ theme, isOpen }) =>
    isOpen ? `1px solid ${theme.palettes.OldAsphalt.L20}` : 'none'};
`;

export const ModalTabsFiltersButton = styled.button.attrs(() => ({ type: 'button' }))<{
  isOpen: boolean;
}>`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  width: 30px;
  height: 65px;
  border-radius: 8px 0 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palettes.OldAsphalt.main};
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.palettes.OldAsphalt.L20};
  border-right: none;
  background-color: ${({ theme }) => theme.colors.White};
  cursor: pointer;
  overflow: hidden;

  & > svg {
    transform-origin: center center;
    transform: rotateZ(${({ isOpen }) => (isOpen ? -90 : 90)}deg);
    transition: transform 0.2s linear;
  }

  &:focus,
  &:active {
    outline: none;
  }
`;

export const ModalTabsFiltersContainer = styled.div`
  width: 100%;
  height: 100%;
`;
