import styled from 'styled-components';
import {
  ToastMode,
  ISettings,
  IToastDiv,
  ModeType,
  TypeStyle,
  ToastSize,
  ToastProps,
} from './types';

const mode: ModeType = {
  light: '#FFFFFF',
  dark: '#2B3858',
  info: '#325692',
  success: '#379A34',
  error: '#CC2A35',
};

const actionMode: ModeType = {
  light: '#ffffffb3',
  dark: '#2B3858',
  info: '#E6F1FF',
  success: '#EBF8EA',
  error: '#FBE9EA',
};

const type: TypeStyle = {
  small: '350px',
  medium: '464px',
  large: '464px',
};

const firstActionBtnBgColor: ModeType = {
  light: '#1E5BAF',
  dark: '#ffffff33',
  info: '#1E5BAF',
  success: '#379A34',
  error: '#A3212A',
};

const actionText: ModeType = {
  light: '#0C0D10',
  dark: '#FFFFFF',
  info: '#325692',
  success: '#1F581D',
  error: '#A3212A',
};

function iconColor(props: IToastDiv) {
  if (props.mode === 'light' && props.size !== 'large') {
    return '#1E5BAF';
  }
  if (props.size === 'large' && props.mode === 'dark') {
    return 'white';
  }
  if (props.size === 'large') {
    return firstActionBtnBgColor[props.mode];
  }
  return 'white';
}

function closeIconColor(props: ISettings) {
  if (props.mode === 'light') {
    return '#B0B3C3';
  }
  if (props.itemType === 'large' && props.mode !== 'dark') {
    return '#B0B3C3';
  }
  return '#ffffff';
}

function toastTextColor(props: ISettings) {
  if (props.mode !== 'light' && props.itemType !== 'large') {
    return '#ffffff';
  }
  if (props.itemType === 'large') {
    return actionText[props.mode];
  }
  return '#181920cc';
}

function secondBtnColor(props: Pick<ToastProps, 'mode' | 'size'>) {
  if (props.mode === 'light') {
    return '#7B819B';
  }
  if (props.size === 'large') {
    return firstActionBtnBgColor[props.mode];
  }
  return '#ffffff';
}

function secondBtnBorderColor(props: Pick<ToastProps, 'mode' | 'size'>) {
  if (props.mode === 'light') {
    return '#B0B3C3';
  }
  if (props.size !== 'large') {
    return '#ffffff';
  }
  return firstActionBtnBgColor[props.mode];
}

export const ToastDiv = styled.div<IToastDiv>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: ${(props) => props.mode === 'light' && '1px solid #e8e8ef'};
  box-sizing: border-box;
  margin: 10px 0;
  padding: 16px;
  width: ${(props) => type[props.size]};
  background-color: ${(props) =>
    props.size === 'large' ? actionMode[props.mode] : mode[props.mode]};
  transition: all 1.5s ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  svg {
    margin: 2px 10px auto 0;
    color: ${(props) => iconColor(props)};
  }
`;

export const ToastText = styled.p<ISettings>`
  width: 100%;
  color: ${(props) => toastTextColor(props)};
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  cursor: default;
  overflow: hidden;
  word-break: break-all;
`;

export const CloseBtn = styled.button<ISettings>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: auto;
  svg {
    margin: 0;
    color: ${(props) => closeIconColor(props)};
  }
`;

export const ToastContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ToastTitle = styled.p<{ mode: ToastMode }>`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 8px;
  color: ${(props) => actionText[props.mode]};
`;

export const ToastActions = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const ToastAction = styled.button<{
  size: ToastSize;
  mode: ToastMode;
  name: 'primaryAction' | 'secondaryAction';
}>`
  display: block;
  padding: 8px 24px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 8px;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;

  &[name='primaryAction'] {
    border: 1px solid
      ${(props) => (props.size === 'large' ? firstActionBtnBgColor[props.mode] : '#ffffff')};
    background-color: ${(props) => firstActionBtnBgColor[props.mode]};
    margin-right: 12px;
  }
  &[name='secondaryAction'] {
    border: 1px solid ${(props) => secondBtnBorderColor(props)};
    color: ${(props) => secondBtnColor(props)};
  }
`;
