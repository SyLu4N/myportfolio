import { FiDownloadCloud, FiGithub } from 'react-icons/fi';

import Image from 'next/image';

import { Title } from '../../components/Title';
import { Container, Content } from './styles';

export function AboutMe(): JSX.Element {
  return (
    <Container id="sobre">
      <Title text="Sobre mim" scroll={600} />

      <Content>
        <div className="container-img">
          <Image
            src="/assets/luanAboutMe.png"
            alt="Minha foto"
            width="300px"
            height="300px"
          />
        </div>
        <h1>Luan Simões</h1>
        <p>Desenvolvedor Front-End</p>

        <em>
          Olá! Eu sou o Luan Simões, tenho 21 anos e sou de Suzano, SP. Sou um
          fanático por tecnologia e um entusiasta do desenvolvimento Front-end.
          <br />
          <br />
          Minha jornada de aprendizado me levou desde a construção de páginas
          HTML até a integração de APIs locais e públicas, passando por
          JavaScript, ReactJS, React com TypeScript e até CSS puro. Também
          arrisquei meu lado back-end com a linguagem Python. Além das
          habilidades técnicas, desenvolvi várias habilidades pessoais, como
          gerenciamento de tempo, produtividade e comunicação clara.
          <br />
          <br />
          Atualmente, estou na faculdade WYDEN, onde curso Análise e
          Desenvolvimento de Sistemas. Estou ansioso para começar minha carreira
          como desenvolvedor e continuar minha jornada apaixonada pelo mundo da
          tecnologia.
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
