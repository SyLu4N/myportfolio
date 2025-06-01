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
        <p>Desenvolvedor Full Stack</p>

        <em>
          Olá! Me chamo Luan Simões tenho {myAge()} anos, desenvolvedor Full
          Stack de Suzano - SP.
          <br />
          <br />
          Minha trajetória na tecnologia começou com HTML e CSS, e desde então
          venho me especializando em ferramentas modernas como React.js,
          Next.js, TypeScript, Node.js e React Native.
          <br />
          <br />
          Com uma base sólida em desenvolvimento front-end e back-end, também
          atuo com Electron.js e Puppeteer, explorando automações e aplicações
          desktop. Além do desenvolvimento, trago experiências anteriores com
          design gráfico e marketing digital, o que me proporciona uma visão
          mais ampla sobre usabilidade, experiência do usuário e comunicação
          visual.
          <br />
          <br />
          Atualmente, trabalho como Técnico de Service Desk na Movida, onde além
          de prestar suporte técnico, também desenvolvo automações internas. Sou
          formado em Análise e Desenvolvimento de Sistemas pela Wyden e sigo
          ampliando meus conhecimentos por meio de cursos intensivos e projetos
          práticos.
          <br />
          <br />
          Seja criando landing pages otimizadas para SEO, sistemas
          administrativos simples ou aplicações completas com SSR, meu objetivo
          é sempre entregar soluções escaláveis, performáticas e com excelente
          experiência para o usuário.
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
