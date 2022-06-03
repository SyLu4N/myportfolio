import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;

  h1 {
    width: 100%;

    font-size: 2.5rem;
    text-align: left;

    span {
      color: blue;
    }

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
`;
