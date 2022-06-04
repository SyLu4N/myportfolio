import { MdKeyboardArrowDown } from 'react-icons/md';
import { Container, Content } from './styles';

export function BackEnd(): JSX.Element {
  let contador = 0;

  function handleBack(e: any): void {
    const el = e.target.parentElement;
    const front = el.querySelector('.front') as HTMLElement;
    const svg = el.querySelector('.svg') as HTMLElement;

    if (contador === 0) {
      svg.setAttribute('class', 'opem svg');
      svg.setAttribute('title', 'Abrir');
      front.classList.remove('hidden');
      contador++;
    } else {
      svg.setAttribute('class', 'close svg');
      svg.setAttribute('title', 'Fechar');
      front.classList.add('hidden');
      contador--;
    }
  }

  return (
    <Container>
      <h1 onClick={handleBack}>
        Back End Developer
        <div>
          <MdKeyboardArrowDown size={30} className="svg" />
        </div>
      </h1>

      <Content className="hidden front">
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
