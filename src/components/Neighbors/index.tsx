import Link from 'next/link';

import { TCountry } from '@/shared/types';

import * as S from './styles';

interface IPropsNeighbors {
  neighbors: TCountry[];
}

export function Neighbors({ neighbors }: IPropsNeighbors) {
  if (neighbors.length === 0)
    return <S.EmptyMessage>No countries</S.EmptyMessage>;

  return (
    <S.Container>
      {neighbors.map((neighbor) => (
        <li key={neighbor.cca2}>
          <Link href={`/country/${neighbor.cca2.toLowerCase()}`} passHref>
            <S.Neighbor key={neighbor.name.common}>
              {neighbor.name.common}
            </S.Neighbor>
          </Link>
        </li>
      ))}
    </S.Container>
  );
}
