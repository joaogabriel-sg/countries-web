import { motion } from 'framer-motion';

import { pxToRem } from '@/shared/utils';
import { styled } from '@/stitches.config';

export const Container = styled(motion.ul, {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: `1fr`,
  justifyContent: 'space-between',
  gap: `clamp(${pxToRem(16)}, 8vw, ${pxToRem(32)})`,
  '@sm': {
    gridTemplateColumns: `repeat(2, 1fr)`,
  },
  '@lg': {
    gridTemplateColumns: `repeat(3, 1fr)`,
  },
  '@xl': {
    gridTemplateColumns: `repeat(4, 1fr)`,
  },
});

export const CardWrapper = styled(motion.li, {});

export const Card = styled('a', {
  background: '$white',
  height: pxToRem(380),
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderRadius: 4,
  boxShadow: '$default',
  textDecoration: 'none',
  color: '$darkBlue',
});

export const CardImage = styled('img', {
  width: '100%',
  height: pxToRem(180),
  objectFit: 'cover',
});

export const CardInfo = styled('div', {
  padding: pxToRem(24),
});

export const CardTitle = styled('h3', {
  marginBottom: pxToRem(16),
  fontSize: pxToRem(20),
  fontWeight: 800,
  color: '$darkBlue',
});

export const CardData = styled('span', {
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
