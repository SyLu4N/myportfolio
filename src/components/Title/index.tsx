import { Typewriter } from '../Typewriter';
import { Container } from './styles';

interface TitleProps {
  text: string;
  scroll?: number;
}

export function Title({ text, scroll = undefined }: TitleProps) {
  const newText = text.toUpperCase();

  return (
    <Container>
      <h1>{newText}</h1>
      <p>
        <Typewriter msg={newText} scroll={scroll} />
      </p>
    </Container>
  );
}
