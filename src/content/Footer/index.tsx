import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';

import { Container, Content, Finish } from './styles';

export function Footer(): JSX.Element {
  return (
    <Container id="contato">
      <Content>
        <div>
          <h1>Iniciar um projeto</h1>

          <p>
            Se interessou no meu trabalho? <br />
            Vamos marcar uma conversa.
          </p>

          <a href="mailto:luaan.carlos@hotmail.com">Vamos fazer acontecer</a>
        </div>
      </Content>

      <Finish>
        <p>Aprendendo um pouco a cada dia, sempre em busca do próximo nível</p>

        <span>
          <a
            href="https://www.linkedin.com/in/luan-sim%C3%B5es-617492236/"
            target="_blank"
            rel="noreferrer"
            aria-label="Link para o meu Linked-In"
          >
            <FiLinkedin size={22} />
          </a>

          <a
            href="https://github.com/sylu4n"
            aria-label="Link para o meu GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={22} />
          </a>

          <a
            href="https://www.instagram.com/_luannsimoes_/"
            target="_blank"
            aria-label="Link para o meu Instagram"
            rel="noreferrer"
          >
            <FiInstagram size={22} />
          </a>

          <a
            href="mailto:luaan.carlos@hotmail.com"
            aria-label="Direcionamento para o meu e-mail"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineMailOutline size={22} />
          </a>
        </span>
      </Finish>

      <strong>© Luan Simões. All right reserved</strong>
    </Container>
  );
}
