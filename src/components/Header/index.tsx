import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';

import { Container } from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <h1>SyLu4N</h1>
      <nav>
        <a href="#home">Home</a>

        <a href="#sobre">Sobre</a>
        <a href="#sobre">Skills</a>
        <a href="#sobre">Experiência/Estudos</a>
        <a href="#sobre">Trabalhos</a>
        <a href="#sobre">Contato</a>
      </nav>
    </Container>
  );
}
