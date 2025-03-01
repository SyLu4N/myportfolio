import { IconType } from 'react-icons';

import { Ball } from '../../Ball';
import { Container, Skill as SkillCss } from './styles';

interface SkillProps {
  element: { name: string; icon: IconType; counter: number };
}

export function Skill({ element }: SkillProps) {
  const IconElement = element.icon;

  return (
    <Container>
      <SkillCss>
        <h3>
          {element.name} <IconElement />
        </h3>

        <Ball counter={element.counter} />
      </SkillCss>
    </Container>
  );
}
