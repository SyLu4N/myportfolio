import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 4rem;
  margin-top: 4rem;

  .open {
    animation: openSkills 500ms forwards;
  }

  .close {
    animation: closeSkills 500ms forwards;
  }

  @media (max-width: 500px) {
    padding: 0;

    h1 {
      border: 1px solid white;
      width: 100%;
      justify-content: center;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  transition: 300ms all;

  padding: 38px;

  @keyframes closeSkills {
    0% {
      padding: 38px;
      height: 376px;
    }

    100% {
      padding: 0px;
      height: 0px;
    }
  }

  @keyframes openSkills {
    0% {
      height: 64px;
    }

    100% {
      height: 376px;
    }
  }
`;

export const Title = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  user-select: none;

  color: var(--title);
  transition: 300ms all;

  cursor: pointer;

  h2 {
    display: flex;
    align-items: center;

    font-size: 1.5rem;
    color: var(--title);
  }
`;
