import styled from 'styled-components';

export const Container = styled.article`
  @keyframes openSkill {
    0% {
      margin-left: -5%;
      opacity: 0.1;
    }

    100% {
      opacity: 1;
      margin-left: 0;
    }
  }

  @keyframes closeSkill {
    0% {
      margin-left: 0;
      opacity: 1;
    }

    100% {
      margin-left: -5%;
      opacity: 0;
    }
  }
`;

export const Skill = styled.div`
  display: inline-flex;
  flex-direction: column;

  height: 60px;

  color: var(--details);

  svg {
    width: 20px;
    height: 20px;
  }

  h3 {
    display: flex;
    align-items: center;
    gap: 4px;

    cursor: default;

    font-size: 1rem;
    color: currentColor;
  }

  &:hover span:nth-child(1) {
    animation: ballWave 300ms;
  }

  &:hover span:nth-child(2) {
    animation: ballWave 300ms 0.1s;
  }

  &:hover span:nth-child(3) {
    animation: ballWave 300ms 0.2s;
  }

  &:hover span:nth-child(4) {
    animation: ballWave 300ms 0.3s;
  }

  &:hover span:nth-child(5) {
    animation: ballWave 300ms 0.4s;
  }

  @keyframes ballWave {
    0% {
      margin-top: 0.1rem;
    }

    50% {
      margin-top: 0.5rem;
    }

    100% {
      margin-top: 0rem;
    }
  }
`;
