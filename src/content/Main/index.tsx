import { AboutMe } from '../AboutMe';
import { Portfolio } from '../Projects';
import { Skills } from '../Skills';
import { StudyWork } from '../StudyWork';
import { Welcome } from '../Welcome';
import { Container } from './styles';

export function Main(): JSX.Element {
  return (
    <Container>
      <Welcome />

      <AboutMe />

      <Skills />

      <StudyWork />

      <Portfolio />
    </Container>
  );
}
