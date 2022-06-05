import { Container } from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <h1>SyLu4N</h1>
      <nav>
        <a href="#home">Home</a>

        <a href="#sobre">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#estudo">Experiência/Estudos</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contato">Contato</a>
      </nav>
    </Container>
  );
}
