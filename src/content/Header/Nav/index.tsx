import { useRef } from 'react';
import { BsCreditCard2Front, BsStars } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { IoIosClose } from 'react-icons/io';
import { RiMenu4Line } from 'react-icons/ri';
import { TbSchool, TbSend, TbHome } from 'react-icons/tb';

import Image from 'next/image';

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
  const imgRef = useRef<HTMLImageElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  function handleTheme(): void {
    if (!imgRef.current) return;

    imgRef.current.style.animation = 'none';
    void imgRef.current.offsetHeight;
    imgRef.current.style.animation = 'newTheme 400ms';

    if (theme === 'ligth') {
      setTheme('dark');
      localStorage.setItem('USER_THEME', 'dark');
    } else {
      setTheme('ligth');
      localStorage.setItem('USER_THEME', 'ligth');
    }
  }

  function handleNav(): void {
    if (!navRef.current) return;
    const nav = navRef.current;

    nav.style.animation = 'none';
    void nav.offsetHeight;

    if (!isMenuMobileOpen) {
      nav.style.animation = 'headerCima 400ms';
      nav.setAttribute('id', 'grid');
      setIsMenuMobileOpen(true);
    } else {
      nav.style.animation = 'headerBaixo 400ms';

      setTimeout(() => {
        nav.removeAttribute('id');
        setIsMenuMobileOpen(false);
      }, 300);
    }
  }

  return (
    <Container>
      <em className="close" onClick={handleNav}>
        <RiMenu4Line size={35} />
      </em>

      <div className="nav" ref={navRef}>
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

        <a href="#skills">
          <em>
            <BsStars size={16} />
          </em>
          Skills
        </a>

        <a href="#qualificacoes">
          <em>
            <TbSchool size={16} />
          </em>
          Qualificações
        </a>

        <a href="#projetos">
          <em>
            <BsCreditCard2Front />
          </em>
          Projetos
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
        <span ref={imgRef} onClick={handleTheme}>
          <Image
            src={theme === 'ligth' ? '/assets/moon.png' : '/assets/sun.png'}
            width={35}
            height={35}
            alt={theme === 'ligth' ? 'Imagem de uma Lua' : 'Imagem de um Sol'}
          />
        </span>
      </div>
    </Container>
  );
}
