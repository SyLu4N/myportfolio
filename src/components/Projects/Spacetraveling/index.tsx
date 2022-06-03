import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Container } from './styles';

export function Spacetraveling(): JSX.Element {
  return (
    <Container>
      <p>
        As novidades e lançamentos da tecnologia na tela do seu computador e
        celular
        <a
          href="https://newspacetraveling.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Acessar agora <HiArrowNarrowRight size={25} />
        </a>
      </p>
      <Image
        src="/assets/spacetraveling.png"
        alt="Projeto"
        width="320"
        height="250"
      />
    </Container>
  );
}
