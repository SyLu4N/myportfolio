import { useState } from 'react';
import { FaGraduationCap, FaSuitcase } from 'react-icons/fa';

import { Studys } from './Studys';
import { Works } from './Works';
import { Container, Header, Content, AnimaContent } from './styles';

type StudyOrWork = 'Study' | 'Work';

export function StudyWork(): JSX.Element {
  const [isWork, setIsWork] = useState<StudyOrWork>('Study');

  return (
    <Container id="estudo">
      <Header>
        <h1>Qualificações</h1>
        <p>Estudos e Experiências</p>
      </Header>
      <Content isWork={isWork}>
        <h3>
          <button type="button" onClick={() => setIsWork('Work')}>
            <FaSuitcase size={24} /> Trabalho
          </button>
        </h3>
        <h3>
          <button type="submit" onClick={() => setIsWork('Study')}>
            Estudo <FaGraduationCap size={30} />
          </button>
        </h3>
      </Content>

      <AnimaContent>
        <Studys isWork={isWork} /> <Works isWork={isWork} />
      </AnimaContent>
    </Container>
  );
}
