import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding-top: 6rem;
  padding-bottom: 7rem;

  position: relative;

  div {
    display: flex;
    flex-direction: column;
    justify-content: start;

    height: 300px;
    max-width: 350px;
    padding-top: 2rem;

    h1 {
      width: 100%;
      color: var(--title);

      text-align: left;

      animation: 1.5s hellow linear;
      @keyframes hellow {
        0% {
          opacity: 0;
          margin-left: -2rem;
        }
        100% {
          opacity: 1;
          margin-left: 0rem;
        }
      }
    }

    p {
      font-size: 1.5rem;

      span {
        color: var(--title);
      }
    }

    strong {
      font-weight: normal;
      font-size: 1rem;
      color: var(--letter);

      padding: 0.7rem;
    }
  }
`;
