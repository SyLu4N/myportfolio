import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 2rem;

  h1 {
    font-size: 2.5rem;
    color: var(--title);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border-radius: 0.6rem;
    background-color: var(--title);
    color: var(--background);
    font-size: 1rem;
    font-style: normal;
    font-weight: bold;

    width: 180px;
    height: 40px;
    margin-top: 1rem;
    transition: 300ms;

    &:hover {
      background-color: var(--details);
    }
  }
`;
