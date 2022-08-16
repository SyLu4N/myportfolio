import { useEffect, useRef } from 'react';

import { Title } from '../Title';
import { Project } from './Project';
import { Projects, Container } from './styles';

export function Portfolio(): JSX.Element {
  const spaceRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const rodizioRef = useRef<HTMLDivElement>(null);
  const worldtrip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addEventListener('scroll', function aparecer() {
      if (scrollY >= 2850) spaceRef.current?.classList.add('aparecerLeft');
      if (scrollY >= 3150) searchRef.current?.classList.add('aparecerRight');
      if (scrollY >= 3500) rodizioRef.current?.classList.add('aparecerLeft');
      if (scrollY >= 3800) worldtrip.current?.classList.add('aparecerRight');
      if (scrollY >= 3900) removeEventListener('scroll', aparecer);
    });
  }, []);

  return (
    <Container>
      <Title text="Portfolio" scroll={2750} />
      <Projects>
        <div ref={spaceRef} className="hidden">
          <Project
            title="Spacetraveling."
            src="/assets/apSpacetraveling.png"
            summary="As novidades e lançamento da tecnologia, em um piscar de olhos"
            link="https://newspacetraveling.vercel.app/"
            description="Desenvolvi o Spacetraveling, como desafio do curso da rockeatseat,
            da trilha de front-end, usei CMS Prismic para carregar as postagem e
            o NextJs para gerenciar rotas e o meu Head, implementei o sistema de
            login com GitHub e passei os dados para os meus componentes usando o
            SessionProvider do NextJs."
          />
        </div>
        <div ref={searchRef} className="hidden">
          <Project
            title="SearchCep"
            src="/assets/apSearchCep.png"
            summary="Gerenciar endereços nunca foi tão facil, apenas com o CEP localize e
            salve seus endereços."
            link="https://newsearchcep.netlify.app/"
            description="Desenvolvi como treinamento de consumo de dados e usando fake API
            para simular um back-end, é possível localizar endereços pelo CEP, e
            salvamos, a principio estava usando JSON Server para amarzenar os
            dados, mais com a necessidade do deploy, migrei para o localStorage."
          />
        </div>
        <div ref={rodizioRef} className="hidden">
          <Project
            title="Rodiziopizza"
            src="/assets/rodiziopizza.png"
            summary="Gerenciar o seu rodízio nunca foi tão fácil, com poucos cliques tenha o resultado em tela"
            link="https://rodiziopizza.vercel.app/"
            description='Um dos primeiros projetos que desenvolvi por uma necessidade do "dia a dia", aproveitei para treinar um pouco o designer. A experiência de transformar uma imagem em um site funcional é incrível. Gostei muito do resultado atual, mas tenho mudanças em mente e estou implementando aos poucos.'
          />
        </div>
        <div ref={worldtrip} className="hidden">
          <Project
            title="Worldtrip"
            src="/assets/apWorldtrip.png"
            summary="Quer viajar? Mas não sabe para onde? Na Worldtrip mostramos os melhores continentes e cidades!"
            link="https://worldtrip-pearl.vercel.app/"
            description="O Worldtrip foi outro desafio proposto pelo curso da rockeatseat, da trilha de front-end, nele praticamos o uso do Chakra UI para estilização do site e responsividade, o projeto em um todo foi bem desafiante, mas até que obtive um resultado satisfatório."
          />
        </div>
      </Projects>
      <div id="contato" />
    </Container>
  );
}
