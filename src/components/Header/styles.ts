import styled from 'styled-components';

interface ContainerProps {
  theme: string;
}

export const Padding = styled.div`
  height: 75px;
`;

export const Container = styled.header<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  height: 75px;
  padding: 0 10rem;
  background-color: var(--background);
  z-index: 2;
  transition: background-color 600ms;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  p {
    position: absolute;
    bottom: 0;
    left: -15%;
    right: -15.5%;

    height: 1px;
    background-color: ${({ theme }) =>
      theme === 'ligth' ? '#eee' : '#303134'};
  }

  h1 {
    font-size: 1.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      display: inline-flex;
      align-items: center;
      transition: 300ms;
      font-size: 1rem;

      &:hover {
        color: var(--details);
      }
    }

    div {
      display: flex;
      align-items: center;

      margin-right: -6rem;
      margin-left: 3rem;

      transition: all 400ms;

      animation: 300ms girar linear;

      img {
        display: block;
        cursor: pointer;
      }
    }

    @keyframes girar {
      0% {
        transform: rotateX(40deg);
      }
      100% {
        transform: rotate3d(0deg);
      }
    }
  }

  @keyframes headerCima {
    0% {
      margin-top: -20%;
    }

    100% {
      margin-top: 0%;
    }
  }

  @keyframes headerBaixo {
    0% {
      margin-top: 0%;
      position: fixed;
    }

    100% {
      margin-top: -20%;
      position: fixed;
    }
  }
`;
