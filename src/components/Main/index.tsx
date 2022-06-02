import { AboutMe } from '../AboutMe';
import { History } from '../History';
import { Projects } from '../Projects';
import { StudyWork } from '../StudyWork';

import { Container } from './styles';

export function Main(): JSX.Element {
  return (
    <Container>
      <AboutMe />
      <History />
      <StudyWork />
      <Projects />
    </Container>
  );
}
