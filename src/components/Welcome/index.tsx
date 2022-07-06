import { useEffect, useState } from 'react';
import { BiSend } from 'react-icons/bi';

import { Container } from './styles';

export function Welcome(): JSX.Element {
  const [textRender, setTextRender] = useState('');

  useEffect(() => {
    const text = 'Hello World!';
    let newText = '';

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        setTimeout(() => {
          newText += text[i];
          setTextRender(newText);
        }, i * 150);

      }, 1300);
    }
  }, []);

  return (
    <Container id="home">
      <div>
        <h1>{textRender}</h1>
        <p>
          I&apos;m <span>Luan Simões</span>
        </p>
        <strong>
          Desenvolvedor Front-End | Javascript | TypeScript | NextJS | ReactJS
        </strong>

        <a href="mailto:luaan.carlos@hotmail.com">
          Mandar Oi <BiSend />
        </a>
      </div>
      <img src="/assets/Luan.png" alt="Minha foto" />
    </Container>
  );
}
