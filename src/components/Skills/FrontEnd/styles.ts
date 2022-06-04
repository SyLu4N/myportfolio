import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 4rem;
  margin-top: 4rem;

  h1 {
    display: flex;
    align-items: center;

    font-size: 1.5rem;
    color: blue;

    &:hover {
      cursor: pointer;
    }

    div {
      display: flex;
      align-items: center;
      margin-left: 5rem;
    }
  }

  .opem {
    transform: rotate(180deg);
    animation: 400ms opem linear;
  }

  .close {
    transform: rotate(0deg);
    animation: 400ms close linear;
  }

  @keyframes opem {
    0% {
      transform: rotate(0deg);
    }
  }
  @keyframes close {
    0% {
      transform: rotate(180deg);
    }
  }
`;

export const Content = styled.div`
  padding: 2rem 3rem;

  animation: 400ms skills linear;

  em {
    display: block;

    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  @keyframes skills {
    0% {
      opacity: 0;
      margin-left: -2rem;
    }
    100% {
      opacity: 1;
      margin-left: 0rem;
    }
  }
`;
