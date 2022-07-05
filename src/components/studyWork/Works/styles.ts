import styled from "styled-components";

interface ContainerProps {
  isWork: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  scroll-snap-align: center;

  transition: all 400ms;
  padding-left: 1rem;
  padding-right: 0.9rem;
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

export const Work = styled.div`
  color: var(--letter);

  time {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.8rem;

    font-style: italic;
    font-size: 0.9rem;
  }

  div {
    width: 250px;
  }

  div:nth-child(1) {
    position: absolute;
    top: -15%;
    left: -17%;

    text-align: right;
  }

  div:nth-child(2) {
    position: absolute;
    top: 33%;
    right: -17%;

    text-align: left;
  }

  div:nth-child(3) {
    position: absolute;
    top: 80%;
    left: -17%;

    text-align: right;
  }
`;
