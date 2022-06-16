import { CaretDown } from 'phosphor-react';
import { memo, useState } from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';

import * as S from './styles';

const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

interface IPropsFilterByRegion {
  onSelectRegion: (continent: string) => void;
}

function FilterByRegionComponent({ onSelectRegion }: IPropsFilterByRegion) {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleSelectRegion(continent: string) {
    setSelectedRegion(continent);
    onSelectRegion(continent);
    setIsPopoverOpen(false);
  }

  return (
    <PopoverPrimitive.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverPrimitive.Trigger asChild>
        <S.SelectedItem>
          {selectedRegion || 'Filter by Region'}
          <CaretDown weight="bold" size={16} />
        </S.SelectedItem>
      </PopoverPrimitive.Trigger>

      <S.PopoverContent>
        {!!selectedRegion && (
          <S.Option onClick={() => handleSelectRegion('')}>All</S.Option>
        )}

        {continents
          .filter((continent) => continent !== selectedRegion)
          .map((continent) => (
            <S.Option
              key={continent}
              onClick={() => handleSelectRegion(continent)}
            >
              {continent}
            </S.Option>
          ))}
      </S.PopoverContent>
    </PopoverPrimitive.Root>
  );
}

export const FilterByRegion = memo(FilterByRegionComponent);
