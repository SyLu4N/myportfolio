import { FiDownloadCloud, FiGithub } from 'react-icons/fi';

import { Title } from '../Title';
import { Container, Content } from './styles';

export function AboutMe(): JSX.Element {
  return (
    <Container id="sobre">
      <Title text="Sobre mim" scroll={600} />

      <Content>
        <img src="/assets/luanAboutMe.png" alt="Minha foto" />
        <h3>Luan Simões</h3>
        <p>Desenvolvedor Front-End</p>

        <em>
          Sempre fui muito apaixonado por tecnologia, seja pela forma de como
          funciona, peças e entre outras coisas que me fascinam, comecei a
          trabalhar com computador em 2018, com uma oportunidade de designer, e
          foi trabalhando que acabei vendo um anúncio de um curso de
          programação, me interessei, comecei a estudar como um hobby, até que
          estava totalmente imerso no mundo de desenvolvimento, que hoje sou
          apaixonado.
        </em>
        <div>
          <a href="https://github.com/sylu4n" target="_blank" rel="noreferrer">
            GitHub <FiGithub />
          </a>

          <a
            href="/assets/Luan_Simoes.pdf"
            download="Luan Simoes"
            type="aplication/zip"
          >
            Download CV <FiDownloadCloud />
          </a>
        </div>
      </Content>
    </Container>
  );
}
