import styled from 'styled-components';

export const Container = styled.a`
  display: inline-flex !important;
  align-items: center;
  justify-content: left;
  gap: 8px;

  background-color: transparent;
  font-weight: normal;

  margin-top: auto;

  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: var(--details);
  }

  .scrollDown {
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: 16px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  span {
    position: relative;
    display: inline-flex;
    justify-content: center;

    width: 20px;
    height: 30px;

    border: 1.5px solid var(--letter);
    border-radius: 10px;

    em {
      position: absolute;
      top: 18%;

      width: 1px;
      height: 6px;
      background-color: var(--letter);

      animation: scrollDown 0ms infinite alternate;
      animation-duration: 1s;

      @keyframes scrollDown {
        70% {
          top: 18%;
        }

        100% {
          top: 28%;
        }
      }
    }
  }

  @media (max-width: 500px) {
    margin-top: 10rem;
    justify-content: center;
  }
`;
