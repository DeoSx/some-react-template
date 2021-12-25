/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import Icon from '../Icon';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const StyledIcon = styled(Icon)`
  margin-left: 2px;
  margin-top: 2px;
  vertical-align: top;
  font-size: 8px;
  color: ${(props) => props.theme.colors.BrickRed};
`;

const Label = styled.div<{ isRequired?: boolean }>`
  ${(props) => props.theme.fonts.Variants.Regular}
  ${(props) => props.theme.fonts.Sizings.par1}
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ErrorLabel = styled.div`
  ${(props) => props.theme.fonts.Sizings.par3}
  ${(props) => props.theme.fonts.Variants.Regular}
  color: ${(props) => props.theme.colors.BrickRed};
  margin-top: 8px;
`;

export { Container, Label, ErrorLabel, StyledIcon };
