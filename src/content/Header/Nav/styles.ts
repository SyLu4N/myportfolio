import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;

  .close {
    display: none;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 10px;

    display: flex;

    a {
      display: flex;
      gap: 4px;
      align-items: center;
      width: auto;

      margin-top: 0;

      transition: 300ms;
      font-size: 1rem;
      font-weight: normal;

      background-color: transparent;
      color: var(--title);

      em {
        display: none;
      }
    }

    a:hover,
    a:focus {
      transition: 0.6s;
      outline: none;
      color: var(--details);
      background-color: transparent;
    }

    /* Menu */
    a::before,
    a::after {
      opacity: 0;
      -webkit-transition: -webkit-transform 0.4s, opacity 0.2s;
      -moz-transition: -moz-transform 0.4s, opacity 0.2s;
      transition: transform 400ms, opacity 0.2s;
    }

    a::before {
      content: '[';
      -webkit-transform: translateX(20px);
      -moz-transform: translateX(20px);
      transform: translateX(20px);
    }

    a::after {
      content: ']';
      width: 0px;
      -webkit-transform: translateX(-20px);
      -moz-transform: translateX(-20px);
      transform: translateX(-20px);
    }

    a:hover::before,
    a:hover::after,
    a:focus::before,
    a:focus::after {
      opacity: 1;
      -webkit-transform: translateX(0px);
      -moz-transform: translateX(0px);
      transform: translateX(0px);
    }

    span {
      position: absolute;
      top: -0.4rem;
      right: -0.3rem;

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

    @media (max-width: 850px) {
      gap: 1rem;
    }
  }

  .theme {
    display: inline-flex;
    align-items: center;

    padding-left: 3rem;

    span {
      display: inline-flex;
      align-items: center;

      cursor: pointer;
      animation: newTheme 400ms;
    }

    @keyframes newTheme {
      0% {
        transform: scale(0) rotate(-80deg);
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
      }
    }

    @media (max-width: 850px) {
      padding-left: 1rem;
    }
  }

  @media (max-width: 750px) {
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
      gap: 12px;
      padding: 12px;

      position: absolute;
      right: -1rem;
      left: -1rem;
      top: 0;
      z-index: 2;

      a {
        display: flex;
        flex-direction: column;
        gap: 1px;

        em {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
