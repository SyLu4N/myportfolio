import { BiSend } from 'react-icons/bi';

import Image from 'next/image';

import { Typewriter } from '../../components/Typewriter';
import { Container, ContainerImg } from './styles';

export function Welcome(): JSX.Element {
  return (
    <Container id="home">
      <div>
        <h1>
          <Typewriter msg="Hello World!" scroll={0} />
        </h1>

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

      <ContainerImg>
        <div className="shadow" />

        <div className="container-img">
          <Image src="/assets/Luan.png" alt="Minha foto" layout="fill" />
        </div>
      </ContainerImg>
    </Container>
  );
}
