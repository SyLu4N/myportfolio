import { History } from '../History';
import { Projects } from '../Projects';
import { Container } from './styles';

export function AboutMe(): JSX.Element {
  return (
    <Container>
      <h1>Hellow World! I&apos;m Luan Simões</h1>

      <History />
      <Projects />
    </Container>
  );
}
