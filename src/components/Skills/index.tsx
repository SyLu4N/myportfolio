import { useEffect, useRef, useState } from 'react';
import { IconType } from 'react-icons';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { Skill as SkillType } from '../../@types/Skill';
import { Skill } from './skill';
import { Container, Content, Title } from './styles';

interface SkillsProps {
  skillsObject: SkillType[];
  title: string;
  icon: IconType;
  defaultValue?: boolean;
}

export function Skills({
  skillsObject,
  title,
  icon,
  defaultValue = false,
}: SkillsProps) {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const [isAnimating, setIsAnimating] = useState(false);

  const IconElement = icon;

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    const content = contentRef.current;

    setIsAnimating(true);

    if (isOpen) {
      content.style.display = 'flex';
      content.classList.add('open');
      content.classList.remove('close');
    } else {
      content.classList.add('close');
      content.classList.remove('open');
    }
  }, [isOpen]);

  function handleIsOpen() {
    if (isAnimating) return;

    setIsOpen(!isOpen);
  }

  function endAnimation(e: React.AnimationEvent<HTMLDivElement>) {
    const content = e.currentTarget;

    if (!isOpen) {
      content.style.display = 'none';
    }

    content.classList.remove('open', 'close');
    setIsAnimating(false);
  }

  return (
    <Container>
      <Title onClick={handleIsOpen}>
        <IconElement size={25} />
        <h2>{title}</h2>

        <MdKeyboardArrowDown
          size={30}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: '300ms all',
          }}
        />
      </Title>

      <Content ref={contentRef} onAnimationEnd={endAnimation}>
        {skillsObject.map((element, index) => (
          <Skill
            element={element}
            key={element.name}
            isOpen={isOpen}
            index={index}
          />
        ))}
      </Content>
    </Container>
  );
}
