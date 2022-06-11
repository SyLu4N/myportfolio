import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Container, Content, ImageContainer } from './styles';

export function Spacetraveling(): JSX.Element {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/assets/apSpacetraveling.png"
          alt="Projeto"
          width="350"
          height="280"
        />
        <div>
          <p>As novidades e lançamento da tecnologia, em um piscar de olhos</p>
          <a
            href="https://newspacetraveling.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Acessar agora <HiArrowNarrowRight size={25} />
          </a>
        </div>
      </ImageContainer>
      <div>
        <h3>Spacetraveling.</h3>
        <Content>
          <aside>
            Desenvolvi o Spacetraveling, como desafio do curso da rockeatseat,
            da trilha de front-end, usei CMS Prismic para carregar as postagem e
            o NextJs para gerenciar rotas e o meu Head, implementei o sistema de
            login com GitHub e passei os dados para os meus componentes usando o
            SessionProvider do NextJs
            <a
              href="https://newspacetraveling.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Acessar agora <HiArrowNarrowRight size={25} />
            </a>
          </aside>
        </Content>
      </div>
    </Container>
  );
}
