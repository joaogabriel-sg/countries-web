import { CaretDown } from 'phosphor-react';

import * as PopoverPrimitive from '@radix-ui/react-popover';

import * as S from './styles';

const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

export function FilterByRegion() {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>
        <S.SelectedItem>
          Filter by Region
          <CaretDown weight="bold" size={16} />
        </S.SelectedItem>
      </PopoverPrimitive.Trigger>

      <S.PopoverContent>
        {continents.map((continent) => (
          <S.Option key={continent}>{continent}</S.Option>
        ))}
      </S.PopoverContent>
    </PopoverPrimitive.Root>
  );
}
