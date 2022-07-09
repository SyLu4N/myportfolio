import { MdKeyboardArrowDown, MdOutlineBackupTable } from 'react-icons/md';

import { Bol } from '../Bol';
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
        <div>
          <span>Git</span>
          <div className="skill">
            <Bol />
            <Bol />
            <Bol />
            <Bol />
          </div>
        </div>

        <div>
          <span>NodeJs</span>
          <div className="skill">
            <Bol />
            <Bol />
            <Bol />
            <Bol />
          </div>
        </div>

        <div>
          <span>NoSQL</span>
          <div className="skill">
            <Bol />
            <Bol />
            <Bol />
          </div>
        </div>

        <div>
          <span>MySQL</span>
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
