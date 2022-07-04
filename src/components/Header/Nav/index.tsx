import Image from 'next/image';
import { RiMenu4Line } from 'react-icons/ri';
import { IoIosClose } from 'react-icons/io';
import { CgFileDocument } from 'react-icons/cg';
import { WiStars } from 'react-icons/wi';
import { TbSchool, TbSend, TbHome } from 'react-icons/tb';
import { BsCreditCard2Front } from 'react-icons/bs';

import { Container } from './styles';

interface NavProps {
  theme: string;
  setTheme: (value: string) => void;
  isMenuMobileOpen: boolean;
  setIsMenuMobileOpen: (value: boolean) => void;
}

export function Nav({
  theme,
  setTheme,
  isMenuMobileOpen,
  setIsMenuMobileOpen,
}: NavProps): JSX.Element {
  function handleTheme(): void {
    if (theme === 'ligth') {
      setTheme('dark');
      localStorage.setItem('USER_THEME', 'dark');
    } else {
      setTheme('ligth');
      localStorage.setItem('USER_THEME', 'ligth');
    }
  }

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
    <Container>
      <em className="close" onClick={handleNav}>
        <RiMenu4Line size={35} />
      </em>
      <div className="nav">
        <a href="#home">
          <em>
            <TbHome />
          </em>
          Home
        </a>

        <a href="#sobre">
          <em>
            <CgFileDocument />
          </em>
          Sobre
        </a>

        <a href="#skills" className="skills">
          <em>
            <WiStars size={25} />
          </em>
          Skills
        </a>

        <a href="#estudo">
          <em>
            <TbSchool size={16} />
          </em>
          Trabalho/Estudos
        </a>

        <a href="#portfolio">
          <em>
            <BsCreditCard2Front />
          </em>
          Portfolio
        </a>

        <a href="#contato">
          <em>
            <TbSend />
          </em>
          Contato
        </a>
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
    </Container>
  );
}
