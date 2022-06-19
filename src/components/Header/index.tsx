import { useTheme } from 'next-themes';
import { Moon, Sun } from 'phosphor-react';
import { useEffect } from 'react';

import { useIsMounted } from '@/shared/hooks';

import * as S from './styles';

export function Header() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  const isDarkTheme = isMounted && !!theme && theme === 'dark';

  function handleToggleTheme() {
    setTheme(isDarkTheme ? 'light' : 'dark');
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Where in the world?</S.Title>
        <S.ToggleThemeButton onClick={handleToggleTheme}>
          {isDarkTheme ? <Sun weight="fill" /> : <Moon weight="fill" />}
          {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
        </S.ToggleThemeButton>
      </S.Wrapper>
    </S.Container>
  );
}
