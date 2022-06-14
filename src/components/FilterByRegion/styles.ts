import { pxToRem } from '@/shared/utils';
import { styled } from '@/stitches.config';
import * as PopoverPrimitive from '@radix-ui/react-popover';

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
});

export const PopoverContent = styled(PopoverPrimitive.Content, {
  background: '$input',
  width: pxToRem(200),
  paddingTop: pxToRem(8),
  paddingBottom: pxToRem(8),
  marginTop: pxToRem(8),
  boxShadow: '$default',
});

export const Option = styled('button', {
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
  cursor: 'pointer',
  '& + &': {
    marginTop: pxToRem(4),
  },
});
