import { useEffect, useState, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import { Project } from '../../components/Project';
import { Title } from '../../components/Title';
import { Projects, Container, Filters, Filter, Sentinela } from './styles';

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
  const [keyMotion, setKeyMotion] = useState(0);

  const sentinela = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const isInView = useInView(sentinela, { once: true, amount: 0 });

  useEffect(() => {
    if (filter === 'all') {
      setNewProjects(projects);
    } else {
      setNewProjects(projects.filter((project) => project.type === filter));
    }

    setKeyMotion((keyMotion) => keyMotion + 1);
  }, [filter]);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls, keyMotion]);

  const container = {
    hidden: { opacity: 1, scale: 0.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200, damping: 11 },
    },
  };

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

      <Sentinela ref={sentinela} />

      <motion.div
        key={keyMotion}
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <Projects>
          {newProjects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Project
                title={project.title}
                src={project.src}
                summary={project.summary}
                link={project.link}
              />
            </motion.div>
          ))}
        </Projects>
      </motion.div>
    </Container>
  );
}
