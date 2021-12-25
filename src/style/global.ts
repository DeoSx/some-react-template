import styled, { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  ${normalize};

  body,
  html {
    color: ${(props) => props.theme.colors.Main};
    ${(props) => props.theme.fonts.Variants.Regular}
    ${(props) => props.theme.fonts.Sizings.Normal}
    background: rgb(244, 243, 248);
    margin: 0;
    padding: 0;
  };

  a {
    text-decoration: none;
  };

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
`;

const ScreenContainer = styled.div`
  flex: 1 0 auto;
  width: 100%;
  padding: 8px;
`;

export { GlobalStyles, ScreenContainer };
