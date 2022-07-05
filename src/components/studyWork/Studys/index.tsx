import { useEffect, useRef } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';

import { Container, Study, Center } from './styles';

interface StudysProps {
  isWork: string;
}

export function Studys({ isWork }: StudysProps): JSX.Element {
  return (
    <Container isWork={isWork}>
      <Center>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />

        <Study>
          <div>
            <strong>
              HTML5 e CSS3 do básico
              <br /> ao avançando
            </strong>
            <p>Curso em Vídeo </p>
            <time>
              <AiOutlineCalendar />
              02/2021 - 04/2021
            </time>
          </div>

          <div>
            <strong>HTML5 e CSS3 Specialist</strong>
            <p>Udemy </p>
            <time>
              <AiOutlineCalendar />
              04/2021 - 06/2021
            </time>
          </div>

          <div>
            <strong>Developer Full Stack</strong>
            <p>Udemy </p>
            <time>
              <AiOutlineCalendar />
              06/2021 - 02/2022
            </time>
          </div>

          <div>
            <strong>NLW Return</strong>
            <p>Rockeatseat </p>
            <time>
              <AiOutlineCalendar />
              04/2022 - 04/2022
            </time>
          </div>
        </Study>
      </Center>
    </Container>
  );
}
