import { Header, Projects, Container } from './styles';
import { Spacetraveling } from './Spacetraveling';
import { SearchCep } from './SearchCep';
import { Rodiziopizza } from './rodiziopizza';
import { useEffect, useRef } from 'react';

export function Portfolio(): JSX.Element {
  const spaceRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const rodizioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addEventListener('scroll', function aparecer(e) {
      if (scrollY >= 3100) spaceRef.current?.classList.add('aparecerLeft');
      if (scrollY >= 3350) searchRef.current?.classList.add('aparecerRight');
      if (scrollY >= 3700) rodizioRef.current?.classList.add('aparecerLeft');
      if (scrollY >= 3800) removeEventListener('scroll', aparecer);
    })
  }, [])

  return (
    <Container>
      <Header id="portfolio">
        <h1>Portfolio</h1>
        <p>Meus projetos</p>
      </Header>
      <Projects>
        <div ref={spaceRef} className="hidden">
          <Spacetraveling />
        </div>
        <div ref={searchRef} className="hidden">
          <SearchCep />
        </div>
        <div ref={rodizioRef} className="hidden">
          <Rodiziopizza />
        </div>
      </Projects>
      <div id="contato" />
    </Container>
  );
}
