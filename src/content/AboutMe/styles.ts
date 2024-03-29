import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    padding-top: 5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  background-color: var(--title);
  border-radius: 1rem;
  position: relative;
  margin-top: 110px;

  .container-img {
    position: absolute;
    top: -15%;

    border-radius: 10rem;
    transform: rotate(20deg);
    overflow: hidden;

    width: 200px !important;
    height: 200px !important;
  }

  h1 {
    padding-top: 78px;
    font-size: 17px;
    color: var(--background);
  }

  p {
    margin-top: -1.2rem;
    color: var(--background) !important;
  }

  em {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 700px;
    font-size: 1.3rem;
    text-align: justify;
    color: var(--background);
    margin: 0 auto;
  }

  div {
    display: flex;
    justify-content: space-evenly;

    margin: 0;
    max-width: 700px;
    width: 100%;

    a {
      border: 1px solid var(--background);
      background-color: var(--background);
      color: var(--title);
      padding: 1rem;

      &:hover {
        background-color: var(--title);
        color: var(--background);
      }
    }
  }

  @media (max-width: 500px) {
    h1 {
      padding-top: 50px;
    }

    .container-img {
      top: -14%;

      width: 140px !important;
      height: 140px !important;
    }

    em {
      text-align: center;
      font-size: 12px;
    }

    a {
      width: auto !important;
    }

    div {
      a {
        padding: 0.5rem;
      }
    }
  }
`;
