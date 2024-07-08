import { Container } from './styles';

interface SkillBallProps {
  counter: number;
  maxCounter?: number;
}

export function Ball({ counter, maxCounter = 5 }: SkillBallProps) {
  const emptyArray = new Array(maxCounter - counter).fill('empty');
  const counterArray = new Array(counter).fill('ball');
  const allBallArray = [...counterArray, ...emptyArray];

  return (
    <Container>
      <div className="containerBoll">
        {allBallArray.map((ball, index) => (
          <span key={index} className={ball} />
        ))}
      </div>
    </Container>
  );
}
