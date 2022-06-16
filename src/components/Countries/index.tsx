import { AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';

import { TCountry } from '@/shared/types';

import * as S from './styles';

interface IPropsCountries {
  countries: TCountry[];
}

const listVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
  hidden: {},
};

const itemVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0,
  },
};

export function Countries({ countries }: IPropsCountries) {
  return (
    <S.Container
      layout
      variants={listVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <AnimatePresence>
        {countries.map((country) => (
          <S.CardWrapper
            key={country.name.common}
            layout
            variants={itemVariants}
          >
            <Link href="/" passHref>
              <S.Card>
                <S.CardImage
                  src={country.flags.svg}
                  alt={country.name.common}
                />

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
          </S.CardWrapper>
        ))}
      </AnimatePresence>
    </S.Container>
  );
}
