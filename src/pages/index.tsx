import { GetStaticProps } from 'next';
import { useState } from 'react';

import { Countries, FilterByRegion, Search } from '@/components';
import { CountriesService } from '@/shared/services';
import { TCountry } from '@/shared/types';
import * as S from '@/styles/pages/Home';

interface IPropsHome {
  countries: TCountry[];
}

export default function Home({ countries }: IPropsHome) {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  function onSearchCountry(countryToSearch: string) {
    if (countryToSearch === '') {
      setFilteredCountries(countries);
      return;
    }

    const newFilteredCountries = countries
      ? countries.filter((country) =>
          country.name.common.toLowerCase().includes(countryToSearch),
        )
      : [];

    setFilteredCountries(newFilteredCountries);
  }

  return (
    <S.Container>
      <S.FiltersSection>
        <Search onSearchCountry={onSearchCountry} />
        <FilterByRegion />
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
