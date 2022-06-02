import { BsCreditCard2Front } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Header, ContainerProjects, Apresentacao } from './styles';

import projeto1 from '../../../public/assets/spacetraveling.png';

interface ImageProps {
  src: string;
}

export function Projects(): JSX.Element {
  const listProjetos: ImageProps[] = [projeto1, projeto1, projeto1, projeto1];

  return (
    <>
      <Header>
        <div>
          <h1>
            <BsCreditCard2Front size={60} /> Meus projetos
          </h1>
        </div>
      </Header>
      <ContainerProjects>
        {listProjetos.map(value => (
          <>
            <div>
              <Apresentacao>
                As novidades e lançamentos da tecnologia na tela do seu
                computador e celular
                <a
                  href="https://newspacetraveling.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acessar agora <HiArrowNarrowRight size={25} />
                </a>
              </Apresentacao>
              <img src={value.src} alt="Projeto" />
            </div>
          </>
        ))}
      </ContainerProjects>
    </>
  );
}
