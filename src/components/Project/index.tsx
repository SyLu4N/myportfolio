import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import Image from 'next/image';

import { Aside, Container, Content, ImageContainer } from './styles';

interface ProjectProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  summary: string;
  link: string;
  description: string;
  title: string;
  lado?: 'Right' | 'Left';
}

export function Project({
  src,
  summary,
  link,
  description,
  title,
  lado = 'Left',
  ...rest
}: ProjectProps) {
  const sentinelaRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const animation = `aparecer${lado}`;

  useEffect(() => {
    if (!sentinelaRef?.current) return;

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    intersectionObserver.observe(sentinelaRef.current);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <Container>
      <div ref={sentinelaRef} className="sentinela" />

      <div className={`main ${isVisible ? animation : 'hidden'} `}>
        <Content {...rest}>
          <ImageContainer>
            <Image src={src} alt="Projeto" width="350" height="280" />
            <div>
              <p>{summary}</p>
              <a href={link} target="_blank" rel="noreferrer">
                Acessar agora <HiArrowNarrowRight size={25} />
              </a>
            </div>
          </ImageContainer>

          <div className="center">
            <h3>{title}</h3>

            <Aside>
              <div>
                {description}

                <a href={link} target="_blank" rel="noreferrer">
                  Acessar agora <HiArrowNarrowRight size={25} />
                </a>
              </div>
            </Aside>
          </div>
        </Content>
      </div>
    </Container>
  );
}
