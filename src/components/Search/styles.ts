import { pxToRem } from '@/shared/utils';
import { styled } from '@/stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';

export const Container = styled('form', {
  width: '100%',
  '@sm': {
    maxWidth: pxToRem(400),
  },
});

export const Field = styled(LabelPrimitive.Root, {
  background: '$input',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: pxToRem(24),
  padding: `0 ${pxToRem(24)}`,
  borderRadius: 4,
  boxShadow: '$default',
  '& > svg': {
    color: '$darkGray',
  },
});

export const Input = styled('input', {
  background: '$input',
  width: '100%',
  height: pxToRem(48),
  border: 0,
  outline: 0,
  fontSize: pxToRem(14),
  color: '$darkGray',
  '&::placeholder': {
    color: '$darkGray',
  },
});
