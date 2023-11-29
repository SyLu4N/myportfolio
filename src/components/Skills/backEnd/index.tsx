import { MdKeyboardArrowDown, MdOutlineBackupTable } from 'react-icons/md';

import { SkillBall } from '../../SkillBall';
import { Container, Content } from './styles';

export function BackEnd(): JSX.Element {
  let contador = 0;

  function handleBack(): void {
    const front = document.querySelector('.back') as HTMLElement;
    const svg = document.querySelector('.svgBack') as HTMLElement;

    if (contador === 0) {
      svg.setAttribute('class', 'opem svgBack');
      svg.setAttribute('title', 'Abrir');
      front.classList.remove('hidden');
      contador++;
    } else {
      svg.setAttribute('class', 'close svgBack');
      svg.setAttribute('title', 'Fechar');
      front.classList.add('hidden');
      contador--;
    }
  }

  return (
    <Container>
      <h2 onClick={handleBack}>
        <MdOutlineBackupTable />
        Back End Developer
        <div>
          <MdKeyboardArrowDown size={30} className="svgBack" />
        </div>
      </h2>

      <Content className="hidden back">
        <SkillBall counter={5} skillName="Git" />

        <SkillBall counter={4} skillName="NodeJs" />

        <SkillBall counter={3} skillName="NoSQL" />

        <SkillBall counter={4} skillName="MySQL" />
      </Content>
    </Container>
  );
}
