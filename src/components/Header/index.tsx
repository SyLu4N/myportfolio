import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';

import { Container } from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <div>
        <nav>
          <Link href="/projects">
            <a>Sobre mim</a>
          </Link>

          <Link href="/projects">
            <a>Projetos</a>
          </Link>

          <Link href="/contact">
            <a>Contato</a>
          </Link>

          <Link href="/">
            <a>
              <FaUserAlt />
            </a>
          </Link>
        </nav>
      </div>
    </Container>
  );
}
