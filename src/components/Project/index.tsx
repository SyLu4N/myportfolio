import { HTMLAttributes, useRef } from 'react';

import Image from 'next/image';

import { Container, Content, ImageContainer } from './styles';

interface ProjectProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  summary: string;
  link: string;
  title: string;
}

export function Project({ src, summary, link, title, ...rest }: ProjectProps) {
  const sentinelaRef = useRef<HTMLDivElement>(null);

  /* useEffect(() => {
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
  }, []); */

  return (
    <Container>
      <div ref={sentinelaRef} className="sentinela" />

      <Content {...rest}>
        <ImageContainer>
          <Image
            src={src}
            alt="Ilustração do projeto"
            width="300"
            height="200"
          />

          <a href={link} target="_blank" rel="noreferrer">
            Visualizar
          </a>
        </ImageContainer>

        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
      </Content>
    </Container>
  );
}
