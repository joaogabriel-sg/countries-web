import { motion } from 'framer-motion';

import { pxToRem } from '@/shared/utils';
import { styled } from '@/stitches.config';

export const SelectedItem = styled('button', {
  background: '$input',
  width: pxToRem(200),
  height: pxToRem(48),
  padding: `${pxToRem(8)} ${pxToRem(24)}`,
  border: 0,
  borderRadius: 4,
  boxShadow: '$default',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'default',
  fontSize: pxToRem(14),
  color: '$inputText',
});

export const Options = styled(motion.div, {
  background: '$input',
  width: pxToRem(200),
  paddingTop: pxToRem(8),
  paddingBottom: pxToRem(8),
  borderRadius: 4,
  marginTop: pxToRem(8),
  boxShadow: '$default',
  transformOrigin: 'top',
});

export const Option = styled(motion.button, {
  background: 'transparent',
  width: '100%',
  paddingTop: pxToRem(4),
  paddingLeft: pxToRem(24),
  paddingRight: pxToRem(24),
  paddingBottom: pxToRem(4),
  border: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: pxToRem(14),
  color: '$inputText',
  cursor: 'pointer',
  '& + &': {
    marginTop: pxToRem(4),
  },
});
