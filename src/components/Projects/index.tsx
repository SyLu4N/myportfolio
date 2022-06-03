import { BsCreditCard2Front } from 'react-icons/bs';

import { Container } from './styles';

import { Spacetraveling } from './Spacetraveling';
import { SearchCep } from './SearchCep';

export function Projects(): JSX.Element {
  return (
    <Container>
      <h1>
        <BsCreditCard2Front size={60} /> Meus projetos
      </h1>
      <div className="projects">
        <Spacetraveling />
        <SearchCep />
        <Spacetraveling />
      </div>
    </Container>
  );
}
