import Image from 'next/image';
import { useState } from 'react';
import { Container, Content } from './styles';

export function History(): JSX.Element {
  const history =
    'Sempre fui muito apaixonado por tecnologia, seja pela forma de como funciona, peças e entre outras coisas que me fascinam, comecei a trabalhar com computador em 2018, com uma oportunidade de designer, e foi trabalhando que acabei vendo um anúncio de um curso de programação, me interessei, comecei a estudar como um hobby, até que estava totalmente imerso no mundo de desenvolvimento, que hoje sou apaixonado.';

  const [animaHistory, setAnimaHistory] = useState('');
  const [contador, setContador] = useState(0);

  function teste(): void {
    setInterval(() => {
      if (contador <= history.length) {
        const newHistory = animaHistory + history[contador];
        setAnimaHistory(newHistory);
        const teste = contador + 1;
        setContador(teste);
        console.log(teste);
      }
    }, 2000);
  }

  return (
    <Container onLoad={teste}>
      <Content>
        <div>
          <Image
            src="/assets/Luan.jpg"
            alt="Minha foto"
            width="250"
            height="250"
          />
        </div>
        <em />
      </Content>
      <Image
        src="/assets/computerEmobile.svg"
        alt="Ilustração de um computador e celular"
        width="500"
        height="500"
        className="finally"
      />
    </Container>
  );
}
