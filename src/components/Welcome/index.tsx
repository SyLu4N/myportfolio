import Image from 'next/image';
import { BiSend } from 'react-icons/bi';

import { Container } from './styles';

export function Welcome(): JSX.Element {
  return (
    <Container>
      <div>
        <h1>Hellow World!</h1>
        <p>
          I&apos;m <span>Luan Simões</span>
        </p>
        <strong>
          Desenvolvedor Front-End | Javascript | TypeScript | NextJS | ReactJS
        </strong>

        <a href="/">
          Mandar Oi <BiSend />
        </a>
      </div>
      <Image src="/assets/Luan.png" alt="Minha foto" width="300" height="300" />
    </Container>
  );
}
