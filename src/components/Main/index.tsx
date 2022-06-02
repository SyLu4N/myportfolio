import { AboutMe } from '../AboutMe';
import { History } from '../History';
import { Projects } from '../studyWork';

import { Container } from './styles';

export function Main(): JSX.Element {
  return (
    <Container>
      <AboutMe />
      <History />
      <Projects />
    </Container>
  );
}
