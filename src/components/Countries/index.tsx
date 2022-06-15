import Link from 'next/link';

import { TCountry } from '@/shared/types';

import * as S from './styles';

interface IPropsCountries {
  countries: TCountry[];
}

export function Countries({ countries }: IPropsCountries) {
  return (
    <S.Container>
      {countries.map((country) => (
        <li key={country.name.common}>
          <Link href="/" passHref>
            <S.Card>
              <S.CardImage src={country.flags.svg} alt={country.name.common} />

              <S.CardInfo>
                <S.CardTitle>{country.name.common}</S.CardTitle>

                <S.CardData>
                  <strong>Population: </strong>
                  <span>{country.population}</span>
                </S.CardData>

                <S.CardData>
                  <strong>Region: </strong>
                  <span>{country.region}</span>
                </S.CardData>

                <S.CardData>
                  <strong>Capital: </strong>
                  <span>{country.capital?.at(0) || '-'}</span>
                </S.CardData>
              </S.CardInfo>
            </S.Card>
          </Link>
        </li>
      ))}
    </S.Container>
  );
}
