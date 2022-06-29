import { Header, Projects } from './styles';
import { Spacetraveling } from './Spacetraveling';
import { SearchCep } from './SearchCep';
import { Rodiziopizza } from './rodiziopizza';

export function Portfolio(): JSX.Element {
  return (
    <>
      <Header id="portfolio">
        <h1>Portfolio</h1>
        <p>Meus projetos</p>
      </Header>
      <Projects>
        <Spacetraveling />
        <SearchCep />
        <Rodiziopizza />
      </Projects>
      <div id="contato" />
    </>
  );
}
