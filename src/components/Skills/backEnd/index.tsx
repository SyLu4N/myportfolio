import { MdKeyboardArrowDown, MdOutlineBackupTable } from 'react-icons/md';

import { Container, Content } from './styles';

export function BackEnd(): JSX.Element {
  let contador = 0;

  function handleBack(e: unknown): void {
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
      <h1 onClick={handleBack}>
        <MdOutlineBackupTable />
        Back End Developer
        <div>
          <MdKeyboardArrowDown size={30} className="svgBack" />
        </div>
      </h1>

      <Content className="hidden back">
        <div>
          <em>Git</em>
          <img src="/assets/semiFullSkill.png" alt="" />
        </div>

        <div>
          <em>NodeJs</em>
          <img src="/assets/semiFullSkill.png" alt="" />
        </div>

        <div>
          <em>NoSQL</em>
          <img src="/assets/tresSkill.png" alt="" />
        </div>

        <div>
          <em>MySQL</em>
          <img src="/assets/tresSkill.png" alt="" />
        </div>
      </Content>
    </Container>
  );
}
