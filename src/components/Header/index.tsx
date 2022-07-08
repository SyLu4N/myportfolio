import { useEffect, useRef, useState } from 'react';
import { Nav } from './Nav';
import { Container, Content, Padding } from './styles';

interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}

export function Header({ theme, setTheme }: HeaderProps): JSX.Element {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    let ultimaPosicao = 0;
    const header = document.querySelector('header') as HTMLElement;
    const nav = document.querySelector('.nav') as HTMLElement;

    function positionScroll(): void {
      nav.removeAttribute('id');
      setIsMenuMobileOpen(false);

      if (window.scrollY > 200) {
        const atualPosicao = window.scrollY;
        header.classList.remove('animationHeaderDow');
        header.classList.remove('animationHeaderUp');

        if (atualPosicao < ultimaPosicao) {
          header.classList.add('animationHeaderUp');
        } else {
          header.classList.add('animationHeaderDow');
        }

        ultimaPosicao = atualPosicao;
      } else {
        header.classList.remove('animationHeaderShowUp');
      }
    }

    window.addEventListener('scroll', positionScroll);
  }, []);

  return (
    <>
      <Padding />
      <Container theme={theme}>
        <Content>
          <div>
            <p />
          </div>
          <h1>SyLu4N</h1>
          <Nav
            theme={theme}
            setTheme={setTheme}
            isMenuMobileOpen={isMenuMobileOpen}
            setIsMenuMobileOpen={setIsMenuMobileOpen}
          />
        </Content>
      </Container>
    </>
  );
}
