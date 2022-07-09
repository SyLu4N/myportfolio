import styled from 'styled-components';

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
  }

  .theme {
    display: flex;
    align-items: center;

    margin: 0 3rem;
    transition: all 400ms;

    img {
      display: block;
      cursor: pointer;
    }
  }

  @media (max-width: 850px) {
    .nav {
      gap: 1rem;
    }

    .theme {
      margin: 0 1rem;
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
      gap: 1;

      position: absolute;
      right: -1rem;
      left: -1rem;
      top: 0;
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
