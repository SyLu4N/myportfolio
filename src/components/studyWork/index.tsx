import { FaGraduationCap, FaSuitcase } from 'react-icons/fa';
import { Studys } from './Studys';

import { Container, Header, Content } from './styles';

export function StudyWork(): JSX.Element {
  return (
    <Container>
      <Header>
        <h1>Qualificações</h1>
        <p>Estudos e Experiência</p>
      </Header>

      <Content>
        <h3>
          <FaSuitcase size={24} /> Trabalho
        </h3>
        <h3>
          Estudo <FaGraduationCap size={30} />
        </h3>
      </Content>
      <Studys />
    </Container>
  );
}
