import { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaSuitcase } from 'react-icons/fa';

import { Title } from '../../components/Title';
import { Studys } from './Studys';
import { Container, Content, AnimaContent } from './styles';
import { Works } from './Works';

type StudyOrWork = 'Study' | 'Work';

export function StudyWork(): JSX.Element {
  const animaContentRef = useRef<HTMLDivElement>(null);
  const [isWork, setIsWork] = useState<StudyOrWork>('Work');

  useEffect(() => {
    animaContentRef.current?.addEventListener('scroll', () => {
      if (!animaContentRef.current) return;

      if (animaContentRef.current.scrollLeft < 212) setIsWork('Work');
      if (animaContentRef.current.scrollLeft > 212) setIsWork('Study');
    });
  }, []);

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
      <Title text="Qualificações" scroll={1700} />

      <article>
        <Content isWork={isWork}>
          <h3>
            <button
              className="work"
              disabled={isWork === 'Work'}
              onClick={work}
            >
              <FaSuitcase size={24} /> <p>Trabalho</p>
            </button>
          </h3>

          <h3>
            <button
              className="study"
              disabled={isWork === 'Study'}
              onClick={study}
            >
              <p>Estudo</p> <FaGraduationCap size={30} />
            </button>
          </h3>
        </Content>

        <AnimaContent ref={animaContentRef}>
          <Works />
          <Studys />
        </AnimaContent>
      </article>
    </Container>
  );
}
