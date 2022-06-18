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

export const BackButton = styled('a', {
  background: '$buttonBackground',
  maxWidth: 'fit-content',
  padding: `${pxToRem(8)} ${pxToRem(32)}`,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  gap: 8,
  boxShadow: '$default',
  textDecoration: 'none',
  fontSize: pxToRem(18),
  fontWeight: 300,
  color: '$buttonText',
});

export const Information = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: pxToRem(32),
  marginTop: pxToRem(24),
  color: '$text',
  '@sm': {
    marginTop: pxToRem(48),
  },
  '@md': {
    gap: pxToRem(48),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const FlagContainer = styled('div', {
  flexShrink: 1,
  width: '100%',
  maxWidth: pxToRem(400),
  '@md': {
    maxWidth: pxToRem(600),
  },
});

export const Flag = styled('img', {
  width: '100%',
});

export const Wrapper = styled('div', {
  flex: 1,
  '@sm': {
    minWidth: 410,
  },
});

export const CountryName = styled('h2', {
  fontWeight: 800,
  fontSize: pxToRem(40),
});

export const DataContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 32,
  marginTop: pxToRem(32),
  '@sm': {
    gap: 16,
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginTop: pxToRem(16),
  },
});

export const Data = styled('span', {
  display: 'block',
  '& + &': {
    marginTop: pxToRem(4),
  },
  '> strong': {
    fontWeight: 600,
  },
  '> span': {
    fontWeight: 300,
  },
});

export const BorderCountriesContainer = styled('div', {
  marginTop: pxToRem(32),
  display: 'flex',
  flexDirection: 'column',
  gap: pxToRem(8),
  '> strong': {
    whiteSpace: 'nowrap',
    fontWeight: 600,
  },
  '@md': {
    marginTop: pxToRem(48),
  },
  '@lg': {
    flexDirection: 'row',
    gap: pxToRem(32),
  },
});
