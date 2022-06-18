import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'phosphor-react';

import { Neighbors } from '@/components';
import { CountriesService } from '@/shared/services';
import { TCountry } from '@/shared/types';
import * as S from '@/styles/pages/Country';

type TParams = {
  id: string;
};

interface IPropsCountry {
  country: TCountry;
  neighbors: TCountry[];
}

export default function Country({ country, neighbors }: IPropsCountry) {
  const nativeName = Object.values(country.name.nativeName).map(
    ({ official }) => official,
  )[0];

  const currencies = Object.values(country.currencies)
    .map((currency) => currency.name)
    .join(', ');

  const languages = Object.values(country.languages).join(', ');

  return (
    <S.Container>
      <Link href="/" passHref>
        <S.BackButton>
          <ArrowLeft size={20} />
          Back
        </S.BackButton>
      </Link>

      <S.Information>
        <S.FlagContainer>
          <S.Flag src={country.flags.svg} alt={country.name.common} />
        </S.FlagContainer>

        <S.Wrapper>
          <S.CountryName>{country.name.common}</S.CountryName>

          <S.DataContainer>
            <div>
              <S.Data>
                <strong>Native Name: </strong>
                <span>{nativeName}</span>
              </S.Data>
              <S.Data>
                <strong>Population: </strong>
                <span>{country.population}</span>
              </S.Data>
              <S.Data>
                <strong>Region: </strong>
                <span>{country.region}</span>
              </S.Data>
              <S.Data>
                <strong>Sub Region: </strong>
                <span>{country.subregion}</span>
              </S.Data>
              <S.Data>
                <strong>Capital: </strong>
                <span>{country.capital || `-`}</span>
              </S.Data>
            </div>
            <div>
              <S.Data>
                <strong>Top Level Domain: </strong>
                <span>{country.tld.join(', ')}</span>
              </S.Data>
              <S.Data>
                <strong>Currencies: </strong>
                <span>{currencies}</span>
              </S.Data>
              <S.Data>
                <strong>Languages: </strong>
                <span>{languages}</span>
              </S.Data>
            </div>
          </S.DataContainer>

          <S.BorderCountriesContainer>
            <strong>Border Countries: </strong>
            <Neighbors neighbors={neighbors} />
          </S.BorderCountriesContainer>
        </S.Wrapper>
      </S.Information>
    </S.Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const countries = await CountriesService.getCountries();

  const paths = countries
    ? countries.map((country) => ({ params: { id: country.cca2 } }))
    : [];

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as TParams;

  const country = await CountriesService.getCountryById(id);

  if (!country)
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };

  const neighbors = await CountriesService.getNeighbors(country.borders);

  return {
    props: { country, neighbors },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
