import { HiArrowNarrowRight } from 'react-icons/hi';

import Image from 'next/image';

import { Container, Content, ImageContainer } from './styles';

interface ProjectProps {
  src: string;
  summary: string;
  link: string;
  description: string;
  title: string;
}

export function Project({
  src,
  summary,
  link,
  description,
  title,
}: ProjectProps): JSX.Element {
  return (
    <Container>
      <ImageContainer>
        <Image src={src} alt="Projeto" width="350" height="280" />
        <div>
          <p>{summary}</p>
          <a href={link} target="_blank" rel="noreferrer">
            Acessar agora <HiArrowNarrowRight size={25} />
          </a>
        </div>
      </ImageContainer>
      <div>
        <h3>{title}</h3>
        <Content>
          <aside>
            {description}
            <a href={link} target="_blank" rel="noreferrer">
              Acessar agora <HiArrowNarrowRight size={25} />
            </a>
          </aside>
        </Content>
      </div>
    </Container>
  );
}
