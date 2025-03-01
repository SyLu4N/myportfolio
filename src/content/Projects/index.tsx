import { useEffect, useState, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import { Project } from '../../components/Project';
import { Title } from '../../components/Title';
import { PROJECTS } from '../../constant/projects';
import { Projects, Container, Filters, Filter, Sentinela } from './styles';

type Filter = 'all' | 'professionals' | 'personal' | 'others';

export function Portfolio(): JSX.Element {
  const [filter, setFilter] = useState<Filter>('all');
  const [newPROJECTS, setNewPROJECTS] = useState(PROJECTS);
  const [keyMotion, setKeyMotion] = useState(0);

  const sentinela = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const isInView = useInView(sentinela, { once: true, amount: 0 });

  useEffect(() => {
    if (filter === 'all') {
      setNewPROJECTS(PROJECTS);
    } else {
      setNewPROJECTS(PROJECTS.filter((project) => project.type === filter));
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
          {newPROJECTS.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Project {...project} />
            </motion.div>
          ))}
        </Projects>
      </motion.div>
    </Container>
  );
}
