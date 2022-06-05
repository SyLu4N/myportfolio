import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
  animation: 500ms aparecer linear;

  span:nth-child(1) {
    height: 12px;
    width: 12px;
    background-color: blue;
    border-radius: 100%;
  }

  span:nth-child(2) {
    height: 80px;
    width: 2px;
    background-color: blue;
    border-radius: 100%;
  }

  span:nth-child(3) {
    height: 12px;
    width: 12px;
    background-color: blue;
    border-radius: 100%;
  }

  span:nth-child(4) {
    height: 80px;
    width: 2px;
    background-color: blue;
    border-radius: 100%;
  }

  span:nth-child(5) {
    height: 12px;
    width: 12px;
    background-color: blue;
    border-radius: 100%;
  }

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
  time {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.8rem;

    font-style: italic;
    font-size: 0.9rem;
  }

  div:nth-child(1) {
    position: absolute;
    top: -16%;
    left: 32%;

    text-align: right;
  }

  div:nth-child(2) {
    position: absolute;
    top: 32%;
    right: 33%;

    text-align: left;
  }

  div:nth-child(3) {
    position: absolute;
    top: 80%;
    left: 33%;

    text-align: right;
  }
`;
