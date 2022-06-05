import { AiOutlineCalendar } from 'react-icons/ai';

import { Container, Work } from './styles';

export function Studys(): JSX.Element {
  return (
    <Container>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <Work>
        <div>
          <strong>
            HTML5 e CSS3 do básico ao
            <br /> avançando
          </strong>
          <p>Curso em Vídeo </p>
          <time>
            <AiOutlineCalendar />
            08/2020 - 06/2023
          </time>
        </div>

        <div>
          <strong>HTML5 e CSS3 Specialist</strong>
          <p>Udemy </p>
          <time>
            <AiOutlineCalendar />
            08/2020 - 06/2023
          </time>
        </div>

        <div>
          <strong>Developer Full Stack</strong>
          <p>Udemy </p>
          <time>
            <AiOutlineCalendar />
            08/2020 - 06/2023
          </time>
        </div>

        <div>
          <strong>NLW Return</strong>
          <p>Rockeatseat </p>
          <time>
            <AiOutlineCalendar />
            08/2020 - 06/2023
          </time>
        </div>
      </Work>
    </Container>
  );
}
