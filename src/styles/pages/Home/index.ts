import { pxToRem } from '@/shared/utils';
import { styled } from '@/stitches.config';

export const Container = styled('div', {
  width: '100%',
  maxWidth: pxToRem(1440),
  paddingTop: pxToRem(24),
  paddingLeft: pxToRem(8),
  paddingRight: pxToRem(8),
  paddingBottom: pxToRem(24),
  marginLeft: 'auto',
  marginRight: 'auto',
  '@sm': {
    paddingTop: pxToRem(48),
    paddingBottom: pxToRem(48),
  },
});

export const FiltersSection = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: pxToRem(24),
  '@sm': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
