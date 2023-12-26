import { Container } from './styles';

interface SkillBallProps {
  skillName: string;
  counter: number;
  maxCounter?: number;
}

export function SkillBall({
  skillName,
  counter,
  maxCounter = 5,
}: SkillBallProps) {
  const emptyArray = new Array(maxCounter - counter).fill('empty');
  const counterArray = new Array(counter).fill('ball');
  const allBallArray = [...counterArray, ...emptyArray];

  return (
    <Container>
      <div className="content">
        <p>{skillName}</p>

        <div className="containerBall">
          {allBallArray.map((ball, index) => (
            <span key={index} className={ball} />
          ))}
        </div>
      </div>
    </Container>
  );
}
