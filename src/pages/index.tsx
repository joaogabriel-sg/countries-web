import { GetStaticProps } from 'next';
import { useCallback, useMemo, useState } from 'react';

import { Countries, FilterByRegion, Search } from '@/components';
import { CountriesService } from '@/shared/services';
import { TCountry } from '@/shared/types';
import * as S from '@/styles/pages/Home';

interface IPropsHome {
  countries: TCountry[];
}

export default function Home({ countries }: IPropsHome) {
  const [filterSearchCountry, setFilterSearchCountry] = useState('');
  const [filterSelectedRegion, setFilterSelectedRegion] = useState('');

  const filteredCountries = useMemo(() => {
    const countriesBySearchWord = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filterSearchCountry),
    );

    const countriesBySelectedRegion = countriesBySearchWord.filter(
      (country) =>
        !filterSelectedRegion || country.region === filterSelectedRegion,
    );

    return countriesBySelectedRegion;
  }, [countries, filterSearchCountry, filterSelectedRegion]);

  const onSearchCountry = useCallback((countryToSearch: string) => {
    setFilterSearchCountry(countryToSearch);
  }, []);

  const onSelectRegion = useCallback((continent: string) => {
    setFilterSelectedRegion(continent);
  }, []);

  return (
    <S.Container>
      <S.FiltersSection>
        <Search onSearchCountry={onSearchCountry} />
        <FilterByRegion onSelectRegion={onSelectRegion} />
      </S.FiltersSection>

      <Countries countries={filteredCountries} />
    </S.Container>
  );
}

export const getStaticProps: GetStaticProps<IPropsHome> = async () => {
  const countries = await CountriesService.getCountries();

  return {
    props: {
      countries: countries || [],
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
