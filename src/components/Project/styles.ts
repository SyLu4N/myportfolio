import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;

  position: relative;

  min-height: 280px;
  width: 100%;

  .sentinela {
    position: absolute;

    width: 1px;
    height: 280px;
  }

  .aparecerLeft {
    display: flex !important;
    animation: aparecerLeft 800ms linear;
  }

  .aparecerRight {
    display: flex;
    animation: aparecerRight 800ms linear;
  }

  @media (max-width: 394px) {
    padding: 1rem;
  }

  @keyframes aparecerLeft {
    0% {
      margin-left: -20%;
    }

    100% {
      margin-left: 0;
    }
  }

  @keyframes aparecerRight {
    0% {
      margin-right: -20%;
    }

    100% {
      margin-right: 0;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  min-height: 100px;

  img {
    border-radius: 1rem;
  }

  div {
    h3 {
      font-size: 1.8rem;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 645px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Aside = styled.aside`
  max-width: 350px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 1rem;
    font-style: italic;
    color: var(--letter);
    font-size: 1.1rem;

    a {
      display: none;
    }

    @media (max-width: 820px) {
      a {
        display: flex;
        width: 100%;

        svg {
          transition: all 300ms;
        }

        &:hover {
          background-color: var(--details);

          svg {
            margin-right: -0.5rem;
            margin-left: 0.5rem;
          }
        }
      }
    }

    @media (max-width: 645px) {
      a {
        display: flex;
        width: 100%;
        height: 35px;
        border-radius: 4px;
      }
    }
  }
`;

export const ImageContainer = styled.article`
  position: relative;

  border-radius: 1rem;
  overflow: hidden;

  height: 280px;

  img {
    transition: all 300ms;
    border-radius: 1rem;
  }

  &:hover img {
    transform: translate(-2%, 2%) scale(1.1);
  }

  &:hover div {
    display: flex;
  }

  div {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 1.2rem;
    background-color: #141c3b;
    border-radius: 1rem;
    transition: all 400ms;

    p {
      text-align: center;
      font-size: 1.5rem;
      color: white;
    }

    a {
      background-color: transparent;
      border: 2px solid var(--title);
      transition: background-color 300ms;
      font-weight: normal;
      color: white;

      svg {
        transition: all 300ms;
      }

      &:hover {
        background-color: var(--title);

        svg {
          margin-right: -0.5rem;
          margin-left: 0.5rem;
        }
      }
    }

    animation: 300ms aparecer linear;
    @keyframes aparecer {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
