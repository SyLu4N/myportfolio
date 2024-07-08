import styled from 'styled-components';

interface ContentProps {
  isWork: string;
}

export const Container = styled.section`
  margin-top: 8rem;
  padding-top: 2rem;
  margin-bottom: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    font-size: 90%;
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 1rem;

  gap: 3rem;

  .work {
    color: var(--title);
    opacity: ${({ isWork }) => (isWork === 'Work' ? 1 : 0.4)};
  }

  .study {
    color: var(--title);
    opacity: ${({ isWork }) => (isWork !== 'Work' ? 1 : 0.4)};
  }

  h3 button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: all 300ms;

    font-size: 1.2rem;
    font-weight: bold;
    background-color: transparent;

    &:disabled {
      cursor: default;
      filter: none;
    }

    @media (min-width: 500px) {
      &:hover,
      &:active {
        opacity: 0.6;
      }
    }
  }
`;

export const AnimaContent = styled.div`
  display: flex;

  width: 430px;
  overflow-x: scroll;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
