export const size = {
  tiny: '12px',
  base: '16px',
  small: '18px',
  medium: '20px',
  large: '28px',
  huge: '48px',
  navHeight: {
    mobile: '56px',
    tablet: '80px',
  },
};

export const color = {
  green: {
    dark: '#0CA678',
    base: '#20C997',
    light: '#63E6BE',
  },
  gray: {
    dark: '#868E96',
    base: '#CED4DA',
    light: '#E9ECEF',
  },
  purple: {
    dark: '#5F3DC4',
    base: '#7048E8',
    light: '#9775FA',
  },
};

export const screen = {
  mobile: '600px',
  tablet: '768px',
  desktop: '1024px',
};

export const device = {
  tablet: `@media all and (min-width: ${screen.tablet})`,
  desktop: `@media all and (min-width: ${screen.desktop})`,
};
