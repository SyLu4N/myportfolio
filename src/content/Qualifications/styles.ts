import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 8rem;
  padding-top: 2rem;
  margin-bottom: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  @media (max-width: 400px) {
    font-size: 90%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 1rem;

  gap: 3rem;

  button {
    color: var(--title);
    opacity: 0.5;
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
      opacity: 1;
    }

    &:disabled:hover {
      opacity: 1;
    }

    @media (min-width: 500px) {
      &:hover,
      &:active {
        opacity: 0.6;
      }
    }
  }
`;

export const Sentinela = styled.div`
  border: 1px solid yellow;
  height: 1px;
  width: 100%;
  position: absolute;
  top: 50%;
`;
