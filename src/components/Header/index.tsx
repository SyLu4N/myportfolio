import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import { IoIosClose } from 'react-icons/io';

import { Container, Padding } from './styles';

interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}

export function Header({ theme, setTheme }: HeaderProps): JSX.Element {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);

  function handleTheme(): void {
    if (theme === 'ligth') {
      setTheme('dark');
      localStorage.setItem('USER_THEME', 'dark');
    } else {
      setTheme('ligth');
      localStorage.setItem('USER_THEME', 'ligth');
    }
  }

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

  function handleNav(): void {
    const nav = document.querySelector('.nav') as HTMLElement;

    if (!isMenuMobileOpen) {
      nav.setAttribute('id', 'grid');
      setIsMenuMobileOpen(true);
    } else {
      nav.removeAttribute('id');
      setIsMenuMobileOpen(false);
    }
  }

  return (
    <>
      <Padding />
      <Container theme={theme}>
        <p />
        <h1>SyLu4N</h1>
        <nav>
          <em onClick={handleNav}>
            <RiMenu4Line size={35} />
          </em>
          <div className="nav">
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#skills">Skills</a>
            <a href="#estudo">Trabalho/Estudos</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contato">Contato</a>
            <span>
              <IoIosClose size={30} onClick={handleNav} />
            </span>
          </div>
          <div className="theme">
            <Image
              src={theme === 'ligth' ? '/assets/moon.png' : '/assets/sun.png'}
              width={35}
              height={35}
              alt={theme === 'ligth' ? 'Imagem de uma Lua' : 'Imagem de um Sol'}
              // eslint-disable-next-line react/jsx-no-bind
              onClick={handleTheme}
            />
          </div>
        </nav>
      </Container>
    </>
  );
}
