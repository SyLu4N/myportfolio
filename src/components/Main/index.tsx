import { Welcome } from '../Welcome';
import { AboutMe } from '../AboutMe';
import { Projects } from '../Projects';
import { Skills } from '../Skills';

import { Container } from './styles';

export function Main(): JSX.Element {
  return (
    <Container>
      <Welcome />
      <AboutMe />
      <Skills />
    </Container>
  );
}
