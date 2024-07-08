import { useEffect, useState } from 'react';

import { Project } from '../../components/Project';
import { Title } from '../../components/Title';
import { Projects, Container, Filters, Filter } from './styles';

type Filter = 'all' | 'professionals' | 'personal' | 'others';

const projects = [
  {
    title: 'Candy And Cakes',
    src: '/assets/candyAndCakes.png',
    type: 'professionals',
    link: 'https://candyandcakes.vercel.app',
    summary:
      'Bolos e doces personalizados. Cada mordida, uma experiência única de doçura!',
  },

  {
    title: 'SL Cosméticos',
    type: 'professionals',
    src: '/assets/slCosmeticos.png',
    link: 'https://slcosmeticos.com.br/',
    summary:
      'Beleza em um clique! SL Cosméticos: produtos profissionais para cabelos e maquiagens.',
  },

  {
    lado: 'Right',
    title: 'Rodiziopizza',
    type: 'personal',
    src: '/assets/rodizio.png',
    link: 'https://rodiziopizza.vercel.app/',
    summary:
      'Gerenciar o seu rodízio nunca foi tão fácil, com poucos cliques tenha o resultado em tela',
  },

  {
    title: 'SearchCep',
    type: 'personal',
    src: '/assets/searchCep.png',
    link: 'https://newsearchcep.netlify.app/',
    summary:
      'Gerenciar endereços nunca foi tão facil, apenas com o CEP localize e salve seus endereços.',
  },

  {
    title: 'Worldtrip',
    type: 'others',
    src: '/assets/world.png',
    link: 'https://worldtrip-pearl.vercel.app/',
    summary:
      'Quer viajar? Mas não sabe para onde? Na Worldtrip mostramos os melhores continentes e cidades!',
  },

  {
    title: 'Desafio',
    type: 'others',
    src: '/assets/desafio.png',
    link: 'https://desafioyduqs.vercel.app/',
    summary:
      'Precisa de exames precisos? Nós oferecemos os melhores serviços de diagnósticos e análises clínicas!',
  },
];

export function Portfolio(): JSX.Element {
  const [filter, setFilter] = useState<Filter>('all');

  const [newProjects, setNewProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'all') {
      setNewProjects(projects);
      return;
    }

    setNewProjects(projects.filter((project) => project.type === filter));
  }, [filter]);

  return (
    <Container id="projetos">
      <Title text="Projetos" scroll={2750} />

      <Filters>
        <Filter
          name="all"
          filterCurrent={filter}
          onClick={() => setFilter('all')}
        >
          Todos
        </Filter>

        <Filter
          name="professionals"
          filterCurrent={filter}
          onClick={() => setFilter('professionals')}
        >
          Profissionais
        </Filter>

        <Filter
          name="personal"
          filterCurrent={filter}
          onClick={() => setFilter('personal')}
        >
          Pessoais
        </Filter>

        <Filter
          name="others"
          filterCurrent={filter}
          onClick={() => setFilter('others')}
        >
          Outros
        </Filter>
      </Filters>

      <Projects>
        {newProjects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            src={project.src}
            summary={project.summary}
            link={project.link}
          />
        ))}
      </Projects>
    </Container>
  );
}
