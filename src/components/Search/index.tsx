import { MagnifyingGlass } from 'phosphor-react';
import { FormEvent, useEffect, useState } from 'react';

import { useDebouncedValue } from '@/shared/hooks';

import * as S from './styles';

interface IPropsSearch {
  onSearchCountry: (country: string) => void;
}

export function Search({ onSearchCountry }: IPropsSearch) {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebouncedValue(searchTerm.trim());

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  useEffect(() => {
    onSearchCountry(debouncedSearchTerm);
  }, [onSearchCountry, debouncedSearchTerm]);

  return (
    <S.Container onSubmit={handleSearch}>
      <S.Field htmlFor="search">
        <MagnifyingGlass size={24} />
        <S.Input
          type="text"
          id="search"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
        />
      </S.Field>
    </S.Container>
  );
}
