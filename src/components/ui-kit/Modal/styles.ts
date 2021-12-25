import styled, { css } from 'styled-components';
import { ModalType } from './types';
import * as TitleBlockStyles from './TitleBlock/styles';

export const Container = styled.div`
  min-height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: calc(-1 * (100vw - 100%));
`;

export const InnerContainer = styled.div`
  position: relative;
  z-index: 400;
`;

export const Content = styled.div`
  position: relative;
  width: fit-content;
  min-width: 480px;
  z-index: 401;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

export const CloseButton = styled.button.attrs(() => ({ type: 'button' }))`
  position: absolute;
  right: 32px;
  top: 32px;

  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palettes.OldAsphalt.main};
  font-size: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;

  & > svg {
    transform: scale(1.15);
  }
`;

export const ContentContainer = styled.div`
  padding: 32px;
  width: 100%;
`;

export const ActionsContainer = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  border-top: 1px solid ${({ theme }) => theme.palettes.OldAsphalt.L20};

  * + * {
    margin-left: 16px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
`;

export const Dialog = styled.div<{ type: ModalType }>`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 400;
  overflow-x: hidden;
  overflow-y: auto;

  opacity: 0;
  visibility: hidden;

  &.enterFrom {
    opacity: 0;
    visibility: hidden;
  }
  &.enter {
    opacity: 1;
    transition: opacity 0.2s linear, visibility 0.2s step-start;
    visibility: visible;
  }
  &.enterTo {
    opacity: 1;
    visibility: visible;
  }
  &.leaveFrom {
    opacity: 1;
    visibility: visible;
  }
  &.leave {
    opacity: 0;
    transition: opacity 0.2s linear, visibility 0.2s step-start 0.2s;
    visibility: hidden;
  }
  &.leaveTo {
    opacity: 0;
    visibility: hidden;
  }

  ${({ type }) =>
    type === 'small' &&
    css`
      ${TitleBlockStyles.TitleContainer} {
        padding-bottom: 12px;
        border-bottom: 0;
      }

      ${ContentContainer} {
        padding-top: 12px;
        padding-bottom: 12px;
      }

      ${ActionsContainer} {
        padding-top: 16px;
        border-top: 0;
      }
    `}

  ${({ type }) =>
    type === 'fullscreen' &&
    css`
      ${Content} {
        margin: 8px;
        width: calc(100% - 16px);
        height: calc(100% - 16px);
        min-height: calc(100vh - 16px);
      }

      ${InnerContainer} {
        width: 100%;
        height: 100%;
      }
    `}
`;
