import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiCodeCurly } from 'react-icons/bi';

import { Container, Content } from './styles';
import { Bol } from '../Bol';

export function FrontEnd(): JSX.Element {
  const [skillsOpen, setSkillsOpen] = useState<boolean>(true);

  function handleFront(e: any): void {
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
        <div>
          <span>HTML</span>
          <div className="skill">
            <Bol />
            <Bol />
            <Bol />
            <Bol />
            <Bol />
          </div>
        </div>

        <div>
          <span>CSS</span>
          <div className="skill">
            <Bol />
            <Bol />
            <Bol />
            <Bol />
            <Bol />
          </div>
        </div>

        <div>
          <span>Javascript</span>
          <div className="skill">
            <Bol />
            <Bol />
            <Bol />
            <Bol />
            <Bol />
          </div>
        </div>

        <div>
          <span>TypeScript</span>
          <div className="skill">
            <Bol />
            <Bol />
            <Bol />
            <Bol />
          </div>
        </div>

        <div>
          <span>ReactJs</span>
          <div className="skill">
            <Bol />
            <Bol />
            <Bol />
            <Bol />
          </div>
        </div>

        <div>
          <span>NextJs</span>
          <div className="skill">
            <Bol />
            <Bol />
            <Bol />
          </div>
        </div>
      </Content>
    </Container>
  );
}
