import { useEffect, useRef, useState } from 'react';

import { Nav } from './Nav';
import { Container, Content } from './styles';

interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}

export function Header({ theme, setTheme }: HeaderProps): JSX.Element {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    const header = headerRef.current;

    let ULTIMA_POSICAO = 0;

    function positionScroll(): void {
      setIsMenuMobileOpen(false);

      if (window.scrollY > 200) {
        const ATUAL_POSICAO = window.scrollY;

        header.classList.remove('animationHeaderDow');
        header.classList.remove('animationHeaderUp');

        if (ATUAL_POSICAO < ULTIMA_POSICAO) {
          header.classList.add('animationHeaderUp');
        } else {
          header.classList.add('animationHeaderDow');
        }

        ULTIMA_POSICAO = ATUAL_POSICAO;
      } else {
        header.classList.remove('animationHeaderShowUp');
      }
    }

    window.addEventListener('scroll', positionScroll);
  }, []);

  return (
    <Container theme={theme} ref={headerRef}>
      <Content>
        <h1>SyLu4N</h1>

        <Nav
          theme={theme}
          setTheme={setTheme}
          isMenuMobileOpen={isMenuMobileOpen}
          setIsMenuMobileOpen={setIsMenuMobileOpen}
        />
      </Content>
    </Container>
  );
}
