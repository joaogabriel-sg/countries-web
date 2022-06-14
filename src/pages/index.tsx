import { FilterByRegion, Search } from '@/components';
import * as S from '@/styles/pages/Home';

export default function Home() {
  return (
    <S.Container>
      <S.FiltersSection>
        <Search />
        <FilterByRegion />
      </S.FiltersSection>
    </S.Container>
  );
}
