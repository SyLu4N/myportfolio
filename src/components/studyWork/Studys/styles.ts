import styled from 'styled-components';

interface ContainerProps {
  isWork: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: all 400ms;
  scroll-snap-align: center;

  animation: 400ms carrosel linear;
  @keyframes carrosel {
    0% {
      right: 0;
    }
    100% {
      right: 34%;
    }
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 400px;
  position: relative;

  span:nth-child(1) {
    height: 12px;
    width: 12px;
    background-color: var(--title);
    border-radius: 100%;
  }

  span:nth-child(2) {
    height: 80px;
    width: 2px;
    background-color: var(--title);
    border-radius: 100%;
  }

  span:nth-child(3) {
    height: 12px;
    width: 12px;
    background-color: var(--title);
    border-radius: 100%;
  }

  span:nth-child(4) {
    height: 80px;
    width: 2px;
    background-color: var(--title);
    border-radius: 100%;
  }

  span:nth-child(5) {
    height: 12px;
    width: 12px;
    background-color: var(--title);
    border-radius: 100%;
  }

  span:nth-child(6) {
    height: 80px;
    width: 2px;
    background-color: var(--title);
    border-radius: 100%;
  }

  span:nth-child(7) {
    height: 12px;
    width: 12px;
    background-color: var(--title);
    border-radius: 100%;
  }

  animation: 500ms aparecer linear;
  @keyframes aparecer {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Study = styled.div`
  color: var(--letter);

  time {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.8rem;

    font-style: italic;
    font-size: 0.9rem;
  }

  strong {
    display: inline-block;
    max-width: 175px;
  }

  div {
    width: 250px;
  }

  div:nth-child(1) {
    position: absolute;
    top: -10%;
    left: -17%;

    text-align: right;
  }

  div:nth-child(2) {
    position: absolute;
    top: 22.5%;
    right: -17%;

    text-align: left;
  }

  div:nth-child(3) {
    position: absolute;
    top: 55%;
    left: -17%;

    text-align: right;
  }

  div:nth-child(4) {
    position: absolute;
    top: 87%;
    right: -17%;

    text-align: left;
  }
`;
