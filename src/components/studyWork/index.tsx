import { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaSuitcase } from 'react-icons/fa';

import { Studys } from './Studys';
import { Works } from './Works';
import { Container, Header, Content, AnimaContent } from './styles';

type StudyOrWork = 'Study' | 'Work';

export function StudyWork(): JSX.Element {
  const animaContentRef = useRef<HTMLDivElement>(null)
  const [isWork, setIsWork] = useState<StudyOrWork>('Work');

  useEffect(() => {
    animaContentRef.current?.addEventListener('scroll', () => {
      if (animaContentRef.current?.scrollLeft === 0) setIsWork('Work');
      if (animaContentRef.current?.scrollLeft === 412) setIsWork('Study');
      console.log(animaContentRef.current?.scrollLeft);
    })
  })

  function work() {
    if (!animaContentRef.current) return;

    animaContentRef.current.scrollLeft = 0;
    setIsWork('Work');
  }

  function study() {
    if (!animaContentRef.current) return;

    animaContentRef.current.scrollLeft = 385;
    setIsWork('Study');
  }

  return (
    <Container id="estudo">
      <Header>
        <h1>Qualificações</h1>
        <p>Estudos e Experiências</p>
      </Header>
      <Content isWork={isWork}>
        <h3>
          <button
            className='work'
            disabled={isWork === 'Work'}
            onClick={work}
          >
            <FaSuitcase size={24} /> Trabalho
          </button>
        </h3>
        <h3>
          <button
            className='study'
            disabled={isWork === 'Study'}
            onClick={study}
          >
            Estudo <FaGraduationCap size={30} />
          </button>
        </h3>
      </Content>

      <AnimaContent ref={animaContentRef}>
        <Works isWork={isWork} /> <Studys isWork={isWork} />
      </AnimaContent>
    </Container>
  );
}
