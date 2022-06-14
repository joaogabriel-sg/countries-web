import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, getCssText, globalCss, theme } = createStitches({
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      background: 'hsl(0, 0%, 98%)',
      input: 'hsl(0, 0%, 100%)',
      lightGray: 'hsl(0, 0%, 98%)',
      darkGray: 'hsl(0, 0%, 52%)',
      darkBlue: 'hsl(200, 15%, 8%)',
    },
    shadows: {
      default: '0px 8px 8px 1px rgba(133,133,133,0.04)',
    },
    fonts: {
      nunitoSans: 'Nunito Sans',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
});
