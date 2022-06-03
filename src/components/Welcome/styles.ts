import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 4rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: start;

    height: 300px;
    max-width: 350px;
    padding-top: 2rem;

    h1 {
      width: 100%;

      font-size: 2.5rem;
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
        color: blue;
      }
    }

    strong {
      font-weight: normal;
      font-size: 1rem;

      padding: 0.7rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      background: blue;
      border-radius: 0.8rem;
      width: 160px;
      padding: 1rem;
      margin-top: 1rem;

      color: white;

      svg {
        margin-left: 0.5rem;
      }
    }
  }

  img {
    border: 1px solid black;
    padding: 1rem;
  }
`;
