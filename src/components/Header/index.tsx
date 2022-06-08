import Image from 'next/image';
import { Container } from './styles';

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

  return (
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
            src={theme === 'dark' ? '/assets/moon.png' : '/assets/sun.png'}
            width={35}
            height={35}
            alt="Imagem de uma lua"
            // eslint-disable-next-line react/jsx-no-bind
            onClick={handleTheme}
          />
        </div>
      </nav>
    </Container>
  );
}
