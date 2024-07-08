import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 620px;

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

  span:nth-child(8) {
    height: 80px;
    width: 2px;
    background-color: var(--title);
    border-radius: 100%;
  }

  span:nth-child(9) {
    height: 12px;
    width: 12px;
    background-color: var(--title);
    border-radius: 100%;
  }

  span:nth-child(10) {
    height: 80px;
    width: 2px;
    background-color: var(--title);
    border-radius: 100%;
  }

  span:nth-child(11) {
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
    top: -8%;
    left: -17%;

    text-align: right;
  }

  div:nth-child(2) {
    position: absolute;
    top: 13%;
    right: -17%;

    text-align: left;
  }

  div:nth-child(3) {
    position: absolute;
    top: 33%;
    left: -17%;

    text-align: right;
  }

  div:nth-child(4) {
    position: absolute;
    top: 52%;
    right: -17%;

    text-align: left;
  }

  div:nth-child(5) {
    position: absolute;
    top: 71%;
    left: -17%;

    text-align: right;
  }

  div:nth-child(6) {
    position: absolute;
    top: 91%;
    right: -17%;

    text-align: left;
  }
`;
