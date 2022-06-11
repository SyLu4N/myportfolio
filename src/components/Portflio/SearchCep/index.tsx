import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Container, Content, ImageContainer } from './styles';

export function SearchCep(): JSX.Element {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/assets/apSearchCep.png"
          alt="Projeto"
          width="350"
          height="280"
        />
        <div>
          <p>
            Gerenciar endereços nunca foi tão facil, apenas com o CEP localize e
            salve seus endereços.
          </p>
          <a
            href="https://newsearchcep.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Acessar agora <HiArrowNarrowRight size={25} />
          </a>
        </div>
      </ImageContainer>
      <div>
        <h3>SearchCep</h3>
        <Content>
          <aside>
            Desenvolvi como treinamento de consumo de dados e usando fake API
            para simular um back-end, é possível localizar endereços pelo CEP, e
            salvamos, a principio estava usando JSON Server para amarzenar os
            dados, mais com a necessidade do deploy, migrei para o localStorage.
            <a
              href="https://newsearchcep.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Acessar agora! <HiArrowNarrowRight size={25} />{' '}
            </a>
          </aside>
        </Content>
      </div>
    </Container>
  );
}
