import Image from 'next/image';
import { useEffect } from 'react';
import { Container, Padding } from './styles';

interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}

export function Header({ theme, setTheme }: HeaderProps): JSX.Element {
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

    function positionScroll(): void {
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
        <p />
        <h1>SyLu4N</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#estudo">Experiência/Estudos</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contato">Contato</a>
          <div>
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
