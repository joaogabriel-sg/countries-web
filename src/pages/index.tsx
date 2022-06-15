import { GetStaticProps } from 'next';

import { Countries, FilterByRegion, Search } from '@/components';
import { CountriesService } from '@/shared/services';
import { TCountry } from '@/shared/types';
import * as S from '@/styles/pages/Home';

interface IPropsHome {
  countries: TCountry[] | null;
}

export default function Home({ countries }: IPropsHome) {
  return (
    <S.Container>
      <S.FiltersSection>
        <Search />
        <FilterByRegion />
      </S.FiltersSection>

      {!!countries && <Countries countries={countries} />}
    </S.Container>
  );
}

export const getStaticProps: GetStaticProps<IPropsHome> = async () => {
  const countries = await CountriesService.getCountries();

  return {
    props: {
      countries,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
