import { useEffect, useRef } from 'react';
import { IconType } from 'react-icons';

import { Ball } from '../../Ball';
import { Container, Skill as SkillCss } from './styles';

interface SkillProps {
  element: { name: string; icon: IconType; counter: number };
  index: number;
  isOpen: boolean;
}

export function Skill({ element, isOpen, index }: SkillProps) {
  const articleRef = useRef<HTMLDivElement>(null);

  const IconElement = element.icon;

  useEffect(() => {
    const element = articleRef.current;
    if (!element) return;

    const openSkill = () => {
      element.style.display = 'flex';
      element.style.opacity = '1';
      element.style.animation = 'openSkill 500ms';
    };

    if (isOpen) {
      setTimeout(openSkill, index * 100);
    } else {
      element.style.animation = 'closeSkill 100ms';
    }
  }, [isOpen, index]);

  function closeSkill(e: React.AnimationEvent<HTMLElement>) {
    if (isOpen) return;
    const element = e.currentTarget;

    element.style.opacity = '0';
    element.style.animation = '';
  }

  return (
    <Container key={element.name} ref={articleRef} onAnimationEnd={closeSkill}>
      <SkillCss>
        <h3>
          {element.name} <IconElement />
        </h3>

        <Ball counter={element.counter} />
      </SkillCss>
    </Container>
  );
}
