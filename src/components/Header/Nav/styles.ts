import styled from "styled-components";

export const Container = styled.nav`
  display: flex;

  .close {
    display: none;
  }

  .nav {
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

      em {
        display: none;
      }
    }

    span {
      position: absolute;
      top: -1.4rem;
      right: 0;

      svg {
        display: none;
        padding: 0;

        cursor: pointer;
        color: var(--title);

        &:hover {
          color: var(--details);
        }
      }
    }
  }

  .theme {
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

  @media (max-width: 850px) {
    .nav {
      gap: 1rem;
    }

    .theme {
      margin-right: 0rem;
      margin-left: 1rem;
    }
  }

  @media (max-width: 750px) {
    position: relative;
    justify-content: right;
    width: 100%;

    .close {
      display: flex;
      align-items: center;

      cursor: pointer;
      color: var(--title);
      transition: color 300ms;

      margin-right: 1rem;

      &:hover {
        color: var(--details);
      }
    }

    .nav {
      display: none;
      grid-template-columns: repeat(3, 1fr);

      position: absolute;
      left: -98px;
      right: -15px;
      top: 0;
      gap: 0;
      bottom: -300%;
      z-index: 2;

      a {
        display: inline-flex;
        flex-direction: column;
        em {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .skills {
        em {
          margin-bottom: -5px;
        }
      }
    }
  }
`;
