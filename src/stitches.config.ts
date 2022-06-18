import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss, createTheme, theme } =
  createStitches({
    theme: {
      colors: {
        background: 'hsl(0, 0%, 98%)',
        text: 'hsl(200, 15%, 8%)',

        input: 'hsl(0, 0%, 100%)',
        inputText: 'hsl(0, 0%, 52%)',

        headerBackground: 'hsl(0, 0%, 100%)',
        headerText: 'hsl(200, 15%, 8%)',

        cardBackground: 'hsl(0, 0%, 100%)',
        cardText: 'hsl(200, 15%, 8%)',

        buttonBackground: 'hsl(0, 0%, 100%)',
        buttonText: 'hsl(200, 15%, 8%)',
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

export const darkTheme = createTheme({
  colors: {
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',

    input: 'hsl(209, 23%, 22%)',
    inputText: 'hsl(0, 0%, 100%)',

    headerBackground: 'hsl(209, 23%, 22%)',
    headerText: 'hsl(0, 0%, 100%)',

    cardBackground: 'hsl(209, 23%, 22%)',
    cardText: 'hsl(0, 0%, 100%)',

    buttonBackground: 'hsl(209, 23%, 22%)',
    buttonText: 'hsl(0, 0%, 100%)',
  },
});
