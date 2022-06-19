import { AnimatePresence, Variants } from 'framer-motion';
import { CaretDown } from 'phosphor-react';
import { memo, useState } from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';

import * as S from './styles';

const optionsVariants: Variants = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      type: 'tween',
      duration: 0.25,
      staggerChildren: 0.1,
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      type: 'tween',
      duration: 0.25,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const optionVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -5,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: -5,
  },
};

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

      <AnimatePresence>
        {isPopoverOpen ? (
          <PopoverPrimitive.Content forceMount asChild>
            <S.Options
              variants={optionsVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {!!selectedRegion && (
                <S.Option
                  variants={optionVariants}
                  onClick={() => handleSelectRegion('')}
                >
                  All
                </S.Option>
              )}

              {continents
                .filter((continent) => continent !== selectedRegion)
                .map((continent) => (
                  <S.Option
                    key={continent}
                    variants={optionVariants}
                    onClick={() => handleSelectRegion(continent)}
                  >
                    {continent}
                  </S.Option>
                ))}
            </S.Options>
          </PopoverPrimitive.Content>
        ) : null}
      </AnimatePresence>
    </PopoverPrimitive.Root>
  );
}

export const FilterByRegion = memo(FilterByRegionComponent);
