import Head from 'next/head';

import { AboutMe } from '../content/AboutMe';
import { Portfolio } from '../content/Projects';
import { Skills } from '../content/Skills';
import { StudyWork } from '../content/StudyWork';
import { Welcome } from '../content/Welcome';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Luan Simões | Home </title>
        <meta
          name="description"
          content="Bem-vindo ao meu portfólio! Aqui, compartilho minha jornada no mundo da programação, destacando minhas habilidades, experiências profissionais e os estudos e cursos que moldaram minha trajetória. Fique à vontade para explorar e conhecer um pouco mais sobre mim e o que eu sobre oque amo fazer."
        />

        <meta
          name="keywords"
          content="portfolio, front end, nextjs, react, projetos, desenvolvimento, web, design, Luan Simões"
        />

        <meta property="og:title" content="Luan Simões - Portfólio" />
        <meta
          property="og:description"
          content="Explore os projetos e experiências de Luan Simões na área de desenvolvedor front-end."
        />
        <meta property="og:image" content="https://i.ibb.co/PxhzqS3/capa.png" />
        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://sylu4n.com.br/" />

        <meta name="author" content="Luan Simões" />
      </Head>

      <main>
        <Welcome />

        <AboutMe />

        <Skills />

        <StudyWork />

        <Portfolio />
      </main>
    </>
  );
}
