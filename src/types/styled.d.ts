import 'styled-components';
import Theme from '../style/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Theme.colors;
    fonts: typeof Theme.fonts;
    tabs: typeof Theme.tabs;
    palettes: typeof Theme.palettes;
    sizes: typeof Theme.sizes;
    utils: typeof Theme.utils;
  }
}
