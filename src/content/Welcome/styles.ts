import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;

  @media (max-width: 500px) {
    min-height: auto;
  }
`;

export const Content = styled.article`
  display: flex;
  justify-content: center;
  gap: 1rem;

  padding-top: 20rem;
  margin-top: -75px;

  position: relative;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: center;
    padding-top: 16rem;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;

  min-height: 500px;
  max-width: 350px;
  padding-top: 2rem;

  h1 {
    width: 100%;
    height: 47px;

    color: var(--title);
    font-size: 34px;
    text-align: left;

    position: relative;
    margin-bottom: -4px;
    animation: 1.5s hellow linear;

    &::after {
      content: '|';

      position: absolute;
      top: -0.17rem;
      font-weight: normal;
      color: var(--letter);

      animation: pisca 500ms infinite alternate-reverse;
    }

    @keyframes pisca {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 0.6;
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-weight: bold;
    font-size: 16px;
    color: var(--background);

    padding: 6px;
    width: 180px;
    height: 40px;
    background-color: var(--title);
    border-radius: 8px;

    svg {
      padding-top: 1px;
      width: 20px;
      height: 20px;
    }
  }

  p {
    font-size: 1.5rem;

    span {
      color: var(--title);
    }
  }

  strong {
    font-weight: normal;
    font-size: 1rem;
    color: var(--letter);

    padding: 0.7rem;
  }

  @media (max-width: 500px) {
    padding-top: 1rem;
    text-align: center;
    min-height: 400px;

    h1 {
      font-size: 28px;
      text-align: center;
    }

    button,
    a {
      width: 100%;
    }
  }
`;

export const Img = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 300px;

  img {
    border-radius: 100%;
  }
`;
