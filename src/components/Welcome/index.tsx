import Image from 'next/image';
import { BiSend } from 'react-icons/bi';

import { Container } from './styles';

export function Welcome(): JSX.Element {
  return (
    <Container id="home">
      <div>
        <h1>Hello World!</h1>
        <p>
          I&apos;m <span>Luan Simões</span>
        </p>
        <strong>
          Desenvolvedor Front-End | Javascript | TypeScript | NextJS | ReactJS
        </strong>

        <a href="mailto:luaan.carlos@hotmail.com">
          Mandar Oi <BiSend />
        </a>
      </div>
      <img src="/assets/Luan.png" alt="Minha foto" />
    </Container>
  );
}
