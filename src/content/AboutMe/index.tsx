import { FiDownloadCloud, FiGithub } from 'react-icons/fi';

import Image from 'next/image';

import { Title } from '../../components/Title';
import { Container, Content } from './styles';

export function AboutMe(): JSX.Element {
  const myAge = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    let age = year - 2001;

    if (month < 11 || (month === 11 && date.getDate() < 1)) {
      age--;
    }

    return age;
  };

  return (
    <Container id="sobre">
      <Title text="Sobre mim" scroll={600} />

      <Content>
        <div className="container-img">
          <Image
            src="/assets/about.png"
            alt="Minha foto"
            width="300px"
            height="300px"
          />
        </div>

        <h1>Luan Simões</h1>
        <p>Desenvolvedor Front-End</p>

        <em>
          Olá! Eu sou o Luan Simões, tenho {myAge()} anos e sou de Suzano - SP. Sou um fanático por tecnologia e um entusiasta do desenvolvimento Front-end.
          <br />
          <br />
          Minha jornada começou com HTML e CSS puro, evoluindo para JavaScript para interações, dominei ReactJS para interfaces de usuário reutilizáveis e escaláveis, e adotei TypeScript para melhorar a qualidade do código. Com Next.js, desenvolvo aplicações otimizadas para SEO e desempenho. Sou versátil na estilização, utilizando frameworks como SASS, Styled-Components, TailwindCSS entre outros frameworks de estilização. 
          <br />
          <br />
          Embora meu foco principal seja o front end, também tenho experiência no back end com Node.js, trabalhando com Fastify e NestJS, além de um conhecimento básico em Python.
          <br />
          <br />
          Além das habilidades técnicas, desenvolvi competências pessoais importantes, como gerenciamento de tempo, produtividade e comunicação clara. 
          <br />
          <br />
          Atualmente, estou na faculdade WYDEN, onde curso Análise e
          Desenvolvimento de Sistemas.
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
