import { HiArrowSmDown } from 'react-icons/hi';

import { Container } from './styles';

export function MouseDown() {
  return (
    <Container href="#sobre">
      <span>
        <em />
      </span>

      <p className="scrollDown">
        Rolar para baixo <HiArrowSmDown />
      </p>
    </Container>
  );
}
