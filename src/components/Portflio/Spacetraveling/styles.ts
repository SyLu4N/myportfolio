import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 3rem;

  img {
    border-radius: 1rem;
  }
`;

export const Content = styled.div`
  max-width: 350px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  height: 220px;

  aside {
    margin-top: 1rem;
    font-style: italic;
    color: var(--letter);
  }
`;

export const ImageContainer = styled.article`
  position: relative;
  height: 280px;

  border-radius: 1rem;
  overflow: hidden;
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
      border: 2px solid blue;
      transition: background-color 300ms;

      svg {
        transition: all 300ms;
      }

      &:hover {
        background-color: blue;

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
