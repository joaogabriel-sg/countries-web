import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

import { TCountry } from '@/shared/types';

import * as S from './styles';

interface IPropsNeighbors {
  neighbors: TCountry[];
}

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export function Neighbors({ neighbors }: IPropsNeighbors) {
  if (!neighbors || neighbors.length === 0)
    return <S.EmptyMessage>No countries</S.EmptyMessage>;

  return (
    <S.Container variants={listVariants} initial="hidden" animate="visible">
      {neighbors.map((neighbor) => (
        <motion.li key={neighbor.cca2} variants={listItemVariants}>
          <Link href={`/country/${neighbor.cca2.toLowerCase()}`} passHref>
            <S.Neighbor key={neighbor.name.common}>
              {neighbor.name.common}
            </S.Neighbor>
          </Link>
        </motion.li>
      ))}
    </S.Container>
  );
}
