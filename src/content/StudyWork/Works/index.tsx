import { AiOutlineCalendar } from 'react-icons/ai';

import { Container, Work, Center } from './styles';

export function Works(): JSX.Element {
  return (
    <Container>
      <Center>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />

        <Work>
          <div>
            <strong>Service Desk</strong>
            <p>Movida</p>

            <time>
              <AiOutlineCalendar />
              11/2024 - Presente
            </time>
          </div>

          <div>
            <strong>Gerente em marketing</strong>
            <p>Asimões Cosméticos</p>

            <time>
              <AiOutlineCalendar />
              12/2020 - 01/2022
            </time>
          </div>

          <div>
            <strong>Designer</strong>
            <p>Asimões Cosméticos </p>

            <time>
              <AiOutlineCalendar />
              07/2018 - 08/2020
            </time>
          </div>

          <div>
            <strong>Ajudante Geral</strong>
            <p>Asimões Cosméticos </p>

            <time>
              <AiOutlineCalendar />
              06/2017 - 06/2018
            </time>
          </div>
        </Work>
      </Center>
    </Container>
  );
}
