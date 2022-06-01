import { BsCreditCard2Front } from 'react-icons/bs';
import { Container } from './styles';

export function Projects(): JSX.Element {
  return (
    <Container>
      <div>
        <p>
          <BsCreditCard2Front size={60} />
        </p>
        <h1>Projetos</h1>
      </div>
      <div>
        <h1>Experiência</h1>
      </div>
      <div>
        <h1>Estudos</h1>
      </div>
    </Container>
  );
}
