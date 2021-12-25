import styled, { css } from 'styled-components';
import { InputWrapper } from '../ui-kit/Input/styles';
import { BaseButton } from '../ui-kit/Button/styles';
import Toast from '../ui-kit/Toast';

const SignIn = css`
  left: 0;
  width: 50%;
  z-index: 2;
`;

const SignUp = css`
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
`;

const OverlayRight = css`
  right: 0;
  transform: translateX(0);
`;

const OverlayLeft = css`
  transform: translateX(-20%);
`;

const formActive = (mode: 'signIn' | 'signUp') => {
  if (mode === 'signIn') {
    return css`
      transform: translateX(100%);
    `;
  }
  return css`
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `;
};

const overlayPanelActive = (overlay: 'right' | 'left') => {
  if (overlay === 'right') {
    return css`
      transform: translateX(20%);
    `;
  }
  return css`
    transform: translateX(0);
  `;
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(https://images.unsplash.com/photo-1500993855538-c6a99f437aa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);
  background-size: cover;
`;

export const Content = styled.div`
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: absolute;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  opacity: 0.8;

  ${InputWrapper} {
    margin: 10px 0;

    & input {
      color: ${({ theme: { colors } }) => colors.White};

      &::placeholder {
        color: ${({ theme: { colors } }) => colors.BasicGrey};
      }
    }
  }

  ${BaseButton} {
    margin-top: 20px;
  }
`;

export const FormContainer = styled.div<{ mode: 'signIn' | 'signUp'; active: boolean }>`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  ${({ mode }) => (mode === 'signIn' ? SignIn : SignUp)};
  ${({ active, mode }) => active && formActive(mode)}
`;

export const Form = styled.form`
  background-color: rgba(45, 52, 54, 1);
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 20px;
  ${({ theme: { fonts } }) => fonts.Sizings.H1};
  color: ${({ theme: { colors } }) => colors.Beige};
`;

export const OverlayContainer = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${({ active }) => active && 'transform: translateX(-100%)'};
`;

export const Overlay = styled.div<{ active: boolean }>`
  background: linear-gradient(to right, #ff4b2b, #ff416c) no repeat 0 0 / cover;
  color: #fff;
  position: absolute;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${({ active }) => active && 'transform: translateX(50%)'};
`;

export const OverlayPanel = styled.div<{ overlay: 'right' | 'left'; active: boolean }>`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${({ overlay }) => (overlay === 'right' ? OverlayRight : OverlayLeft)};
  ${({ active, overlay }) => active && overlayPanelActive(overlay)};
`;

export const Desc = styled.p`
  color: ${({ theme: { colors } }) => colors.White};
  ${({ theme: { fonts } }) => fonts.Sizings.par2};
  font-weight: bold;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  border-radius: 8px;
  flex: 0 0 auto;
  line-height: 20px;
  white-space: nowrap;
  padding: 8px 24px;
  box-sizing: border-box;
  border: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: max-content;
  color: ${({ theme: { colors } }) => colors.White};
  background-color: ${({ theme: { colors } }) => colors.BasicGreen};

  &:hover {
    color: ${({ theme: { colors } }) => colors.LightGrey};
    background-color: ${({ theme: { colors } }) => colors.Green};
  }
`;

export const Notify = styled(Toast)`
  position: absolute;
  top: 30px;
  right: 30px;
`;
