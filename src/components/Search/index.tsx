import { MagnifyingGlass } from 'phosphor-react';

import * as S from './styles';

export function Search() {
  return (
    <S.Container>
      <S.Field htmlFor="search">
        <MagnifyingGlass size={24} />
        <S.Input
          type="text"
          id="search"
          placeholder="Search for a country..."
        />
      </S.Field>
    </S.Container>
  );
}
