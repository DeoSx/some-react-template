import { css } from 'styled-components';

/**
 * Accessible hiding of an input element.
 */
export const VisuallyHidden = () => css`
  position: absolute;
  height: 1px;
  margin: -1px;
  padding: 0;
  width: 1px;
  border: 0;
  clip: rect(0 0 0 0);

  overflow: hidden;
`;
