import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 4rem;
  margin-top: 4rem;

  h2 {
    display: flex;
    align-items: center;

    font-size: 1.5rem;
    color: var(--title);

    position: relative;
    width: 330px;

    svg {
      margin-right: 0.5rem;
      transition: color 300ms;
    }

    &:hover {
      cursor: pointer;

      .svg {
        color: var(--details);
      }
    }

    div {
      display: flex;
      align-items: center;
      margin-left: 5rem;

      position: absolute;
      right: 0;
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

  div {
    max-width: 100px;
    cursor: default;

    &:hover em {
      :nth-child(1) {
        animation: 300ms anima;
        animation-delay: 0s;
      }

      :nth-child(2) {
        animation: 300ms anima;
        animation-delay: 0.1s;
      }

      :nth-child(3) {
        animation: 300ms anima;
        animation-delay: 0.2s;
      }

      :nth-child(4) {
        animation: 300ms anima;
        animation-delay: 0.3s;
      }

      :nth-child(5) {
        animation: 300ms anima;
        animation-delay: 0.4s;
      }
    }

    @keyframes anima {
      0% {
        padding-top: 0.1rem;
      }
      50% {
        padding-top: 0.5rem;
      }
      100% {
        margin-top: 0rem;
      }
    }
  }

  .skill {
    display: flex;
    gap: 0.3rem;
    margin-bottom: 1rem;
  }

  span {
    display: inline-block;

    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: var(--letter);
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
