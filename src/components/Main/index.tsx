import { Welcome } from '../Welcome';
import { History } from '../History';
import { Projects } from '../Projects';
import { StudyWork } from '../StudyWork';

import { Container } from './styles';

export function Main(): JSX.Element {
  return (
    <Container>
      <Welcome />
      <History />
      <StudyWork />
      <Projects />
    </Container>
  );
}
