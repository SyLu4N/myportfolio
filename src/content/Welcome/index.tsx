import Image from 'next/image';
import { useRouter } from 'next/router';

import { MouseDown } from '../../components/MouseDown';
import { Typewriter } from '../../components/Typewriter';
import { Send } from '../../icons/send';
import { Container, Content, Img, Presentation } from './styles';

export function Welcome() {
  const rout = useRouter();

  return (
    <Container>
      <Content id="home">
        <Presentation>
          <div>
            <h1>
              <Typewriter msg="Hello World!" scroll={0} delay={1000} />
            </h1>

            <p>
              I&apos;m <span>Luan Simões</span>
            </p>
          </div>

          <strong>
            Desenvolvedor Front-End | Javascript | TypeScript | NextJS | ReactJS
          </strong>

          <button onClick={() => rout.push('mailto:luaan.carlos@hotmail.com')}>
            Mandar Olá <Send />
          </button>

          <MouseDown />
        </Presentation>

        <Img>
          <Image
            src="/assets/welcome.png"
            alt="Minha foto"
            layout="fill"
            priority={true}
          />
        </Img>
      </Content>
    </Container>
  );
}
