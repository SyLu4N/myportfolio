import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Container } from './styles';

export function SearchCep(): JSX.Element {
  return (
    <Container>
      <p>
        Gerenciar endereços nunca foi tão facil, apenas com o CEP ache e salve
        seus endereços
        <a
          href="https://newsearchcep.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Acessar agora <HiArrowNarrowRight size={25} />
        </a>
      </p>
      <Image
        src="/assets/searchCep.png"
        alt="Projeto"
        width="320"
        height="250"
      />
    </Container>
  );
}
