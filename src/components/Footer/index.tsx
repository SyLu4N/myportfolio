import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';

import { Container, Content, Finish } from './styles';

export function Footer(): JSX.Element {
  return (
    <Container id="contato">
      <Content>
        <h1>Iniciar um projeto</h1>
        <p>
          Se interessou no meu trabalho? <br />
          Vamos marca uma conversa.
        </p>
        <a href="mailto:luaan.carlos@hotmail.com">Vamos fazer acontecer</a>
      </Content>
      <Finish>
        <img src="/assets/Luan.png" alt="Minha foto" />
        <p>Aprendendo um pouco a cada dia, sempre em busca do próximo nível</p>
        <span>
          <a
            href="https://www.linkedin.com/in/luan-sim%C3%B5es-617492236/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size={22} />
          </a>

          <a href="https://github.com/sylu4n " target="_blank" rel="noreferrer">
            <FiGithub size={22} />
          </a>

          <a
            href="https://www.instagram.com/_luannsimoes_/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram size={22} />
          </a>

          <a
            href="mailto:luaan.carlos@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineMailOutline size={22} />
          </a>
        </span>
      </Finish>
    </Container>
  );
}
