import { useState } from 'react';
import { BiCodeCurly } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { SkillBall } from '../../SkillBall';
import { Container, Content } from './styles';

export function FrontEnd() {
  const [skillsOpen, setSkillsOpen] = useState<boolean>(true);

  function handleFront(): void {
    const front = document.querySelector('.front') as HTMLElement;
    const svg = document.querySelector('.svg') as HTMLElement;

    if (!skillsOpen) {
      svg.setAttribute('class', 'opem svg');
      svg.setAttribute('title', 'Abrir');
      front.classList.remove('hidden');
      setSkillsOpen(true);
    } else {
      svg.setAttribute('class', 'close svg');
      svg.setAttribute('title', 'Fechar');
      front.classList.add('hidden');
      setSkillsOpen(false);
    }
  }

  return (
    <Container>
      <h2 onClick={handleFront}>
        <BiCodeCurly /> Front End Developer
        <div>
          <MdKeyboardArrowDown size={30} className="svg" />
        </div>
      </h2>

      <Content className="front">
        <SkillBall counter={5} skillName="HTML" />

        <SkillBall counter={5} skillName="CSS" />

        <SkillBall counter={5} skillName="Javascript" />

        <SkillBall counter={5} skillName="TypeScript" />

        <SkillBall counter={4} skillName="ReactJs" />

        <SkillBall counter={4} skillName="NextJs" />
      </Content>
    </Container>
  );
}
