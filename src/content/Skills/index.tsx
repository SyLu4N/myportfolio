import { Title } from '../../components/Title';
import { BackEnd } from './backEnd';
import { FrontEnd } from './FrontEnd';
import { Container, Header } from './styles';

export function Skills(): JSX.Element {
  return (
    <Container>
      <Header id="skills">
        <Title text="Habilidades" scroll={1300} />
      </Header>

      <FrontEnd />
      <BackEnd />
    </Container>
  );
}
