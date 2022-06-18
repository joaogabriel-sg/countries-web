import { pxToRem } from '@/shared/utils';
import { styled } from '@/stitches.config';

export const EmptyMessage = styled('span', {
  fontWeight: 300,
  fontSize: pxToRem(16),
  color: '$text',
});

export const Container = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: pxToRem(8),
});

export const Neighbor = styled('a', {
  display: 'block',
  background: '$buttonBackground',
  padding: `${pxToRem(4)} ${pxToRem(16)}`,
  borderRadius: 4,
  boxShadow: '$default',
  textDecoration: 'none',
  fontWeight: 300,
  fontSize: pxToRem(14),
  color: '$buttonText',
});
