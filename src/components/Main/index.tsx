import { Welcome } from '../Welcome';
import { AboutMe } from '../AboutMe';
import { Portfolio } from '../Portflio';
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
      <Portfolio />
    </Container>
  );
}
