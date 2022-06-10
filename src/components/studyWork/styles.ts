import styled from 'styled-components';

interface ContentProps {
  isWork: string;
}

export const Container = styled.div`
  margin-top: 8rem;
  padding-top: 4rem;
  margin-bottom: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;

  @media (max-width: 400px) {
    font-size: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 3rem;

  p {
    color: var(--details);
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  gap: 3rem;

  button[type='button'] {
    color: var(--title);
    ${({ isWork }) => isWork !== 'Work' && 'filter: opacity(40%)'};
  }

  button[type='submit'] {
    color: var(--title);
    ${({ isWork }) => isWork !== 'Study' && 'filter: opacity(40%)'};
  }

  h3 button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: all 300ms;

    font-size: 1.2rem;
    font-weight: bold;
    background-color: transparent;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const AnimaContent = styled.div`
  height: 400px;
  width: 430px;
  overflow: hidden;
  position: relative;
`;
