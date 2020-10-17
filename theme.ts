type ColorKeys = keyof typeof Theme.colors;
export type ThemeColors = Extract<ColorKeys, string>;

export const Theme = {
  colors: {
    title: '#2F2C51',
    primary: '#3424EC',
    background: '#F0F0FA',
    backgroundDarken2: 'rgba(49, 123, 210, 0.08)',
    headerGradient: 'linear-gradient(180deg, #B8BECF -62.37%, rgba(156, 166, 192, 0) 100%)',
  },
};
