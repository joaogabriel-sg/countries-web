import { globalCss } from '@/stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    background: '$background',
    color: '$darkBlue',
    '-webkit-font-smoothing': 'antialiased',
  },
  'body, input, textarea, button': {
    fontFamily: '$nunitoSans',
    fontWeight: 600,
    fontSize: '1rem',
  },
  'ul, ol': {
    listStyle: 'none',
  },
});
