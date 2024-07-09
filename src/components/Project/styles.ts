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

  @media (max-width: 394px) {
    padding: 1rem;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 1rem;
  border: 1px solid black;
  border-color: var(--projects-border);
  background-color: var(--projects-background);
  border-radius: 1rem;

  img {
    border-radius: 1rem;
  }

  h3 {
    font-size: 1rem;
  }

  p {
    margin-top: 4px;
    max-width: 300px;
  }

  @media (max-width: 645px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ImageContainer = styled.article`
  position: relative;

  border-radius: 1rem;
  overflow: hidden;

  height: 200px;
  width: 300px;

  img {
    transition: all 300ms;
  }

  &:hover img {
    transform: translate(-2%, 2%) scale(1.1);
  }

  &:hover a {
    opacity: 1;
    display: flex;
  }

  a {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    position: absolute;
    top: -16px;

    opacity: 0;
    border-radius: 0.5rem;
    transition: all 400ms;
    width: 100%;
    height: 100%;
    color: white;

    &:hover {
      background-color: rgba(0, 0, 0, 0.6);

      svg {
        margin-right: -0.5rem;
        margin-left: 0.5rem;
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
