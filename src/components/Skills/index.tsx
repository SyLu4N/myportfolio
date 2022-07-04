import { BackEnd } from './backEnd';
import { FrontEnd } from './FrontEnd';
import { Container, Header } from './styles';

export function Skills(): JSX.Element {
  return (
    <Container>
      <Header id="skills">
        <h1>Habilidades</h1>
        <p>Skilss</p>
      </Header>

      <FrontEnd />
      <BackEnd />
    </Container>
  );
}
