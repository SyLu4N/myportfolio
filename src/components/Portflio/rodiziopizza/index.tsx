import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Container, Content, ImageContainer } from './styles';

export function Rodiziopizza(): JSX.Element {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/assets/rodiziopizza.svg"
          alt="Projeto"
          width="350"
          height="280"
        />
        <div>
          <p>Gerenciar o seu rodízio nunca foi tão fácil, com poucos cliques tenha o resultado em tela</p>
          <a
            href="https://rodiziopizza.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Acessar agora <HiArrowNarrowRight size={25} />
          </a>
        </div>
      </ImageContainer>
      <div>
        <h3>RodizioPizza</h3>
        <Content>
          <aside>
            Sabe quando você vai naquele rodízio de pizza com os amigos ou família e rola aquela competição saudável para ver quem consegue comer mais? Desenvolvi uma aplicação que te ajuda a gerenciar a competição.

            <a
              href="https://rodiziopizza.vercel.app/"
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
