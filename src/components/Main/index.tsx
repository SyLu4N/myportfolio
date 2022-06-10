import { Welcome } from '../Welcome';
import { AboutMe } from '../AboutMe';
import { Portfolio } from '../Portflio';
import { Skills } from '../Skills';
import { StudyWork } from '../studyWork';

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
