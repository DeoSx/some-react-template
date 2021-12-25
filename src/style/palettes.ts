export interface ColorStyle {
  main: string;
  L90: string;
  L80: string;
  L70: string;
  L60: string;
  L50: string;
  L40: string;
  L30: string;
  L20: string;
  L10: string;
}

export const OldAsphalt = {
  L90: '#0C0D10',
  L80: '#181920',
  main: '#7B819B',
  L40: '#B0B3C3',
  L30: '#D7D9E1',
  L20: '#E5E6EB',
  L10: '#F4F3F8',
};

export const BluePrimrose = {
  L80: '#2B3858',
  L60: '#0044A2',
  main: '#0055CB',
  L40: '#4794FF',
  L20: '#E0EDFF',
};

export const AmethystStarling = {
  L80: '#3D114E',
  L60: '#621B7C',
  main: '#7A229B',
  L40: '#BB61DC',
  L20: '#F4E5F9',
};

export const RedRose = {
  L80: '#66151A',
  L60: '#A3212A',
  main: '#CC2A35',
  L40: '#E47B83',
  L20: '#FBE9EA',
};

export const OrangeSunset = {
  L80: '#99540C',
  L60: '#ED861A',
  main: '#F2A657',
  L40: '#F7CA9A',
  L20: '#FEF6EE',
};

export const FirGreen = {
  L80: '#1F581D',
  L60: '#318C2E',
  main: '#3DAF3A',
  L40: '#84D682',
  L20: '#EBF8EA',
};

export const Sunglow = {
  L80: '#D39F00',
  L60: '#F1B600',
  main: '#FFCC2E',
  L40: '#FFEBAD',
  L20: '#FFFAE9',
};

export const MunsellBlue: Partial<ColorStyle> = {
  L80: '#006F77',
  L60: '#00949E',
  main: '#00B9C6',
  L40: '#B5F2F5',
  L20: '#E6FBFD',
};

export default {
  OldAsphalt,
  BluePrimrose,
  AmethystStarling,
  RedRose,
  OrangeSunset,
  FirGreen,
  Sunglow,
  MunsellBlue,
};
