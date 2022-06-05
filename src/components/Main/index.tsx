import { Welcome } from '../Welcome';
import { AboutMe } from '../AboutMe';
import { Projects } from '../Projects';
import { Skills } from '../Skills';

import { Container } from './styles';
import { StudyWork } from '../StudyWork';

export function Main(): JSX.Element {
  return (
    <Container>
      <Welcome />
      <AboutMe />
      <Skills />
      <StudyWork />
    </Container>
  );
}
