import styled from 'styled-components';

export const Container = styled.em`
  display: flex;
  justify-content: center;
  flex-direction: column;

  height: 50px;

  cursor: default;

  .content {
    position: relative;

    max-width: 90px;

    &:hover .ball {
      animation: 300ms anima;

      :nth-child(2) {
        animation-delay: 0.1s;
      }

      :nth-child(3) {
        animation-delay: 0.2s;
      }

      :nth-child(4) {
        animation-delay: 0.3s;
      }

      :nth-child(5) {
        animation-delay: 0.4s;
      }
    }
  }

  .containerBall {
    display: flex;
    gap: 3px;
    position: absolute;

    margin-bottom: 4px;

    @keyframes anima {
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
  }

  span {
    width: 15px;
    height: 15px;

    background-color: var(--title);
    border-radius: 100%;

    transition: all 200ms;

    &.empty {
      opacity: 0.3;
    }
  }
`;
