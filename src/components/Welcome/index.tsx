import { BiSend } from 'react-icons/bi';

import { Typewriter } from '../Effects/Typewriter';
import { Container } from './styles';

export function Welcome(): JSX.Element {
  return (
    <Container id="home">
      <div>
        <Typewriter msg="Hello World!" scroll={0} />

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
