import { pxToRem } from '@/shared/utils';
import { styled } from '@/stitches.config';

export const Container = styled('header', {
  backgroundColor: '$headerBackground',
  boxShadow: '$default',
  color: '$headerText',
});

export const Wrapper = styled('div', {
  maxWidth: pxToRem(1440),
  paddingTop: pxToRem(24),
  paddingLeft: pxToRem(8),
  paddingRight: pxToRem(8),
  paddingBottom: pxToRem(24),
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Title = styled('h1', {
  fontSize: pxToRem(16),
  '@sm': {
    fontSize: pxToRem(24),
  },
});

export const ToggleThemeButton = styled('button', {
  appearance: 'none',
  background: 'transparent',
  border: 0,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  cursor: 'pointer',
  fontSize: pxToRem(12),
  '> svg': {
    fontSize: pxToRem(18),
    '@sm': {
      fontSize: pxToRem(24),
    },
  },
  '@sm': {
    fontSize: pxToRem(18),
  },
});
