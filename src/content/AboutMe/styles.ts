import styled from 'styled-components';

export const Container = styled.section`
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

export const Content = styled.article`
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
    overflow: hidden;

    width: 200px;
    height: 200px;

    @media (max-width: 500px) {
      top: -14%;

      width: 140px;
      height: 140px;
    }
  }

  h1 {
    padding-top: 78px;
    font-size: 17px;
    color: var(--background);

    @media (max-width: 500px) {
      padding-top: 50px;
    }
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

    @media (max-width: 500px) {
      text-align: center;
      font-size: 12px;
    }
  }

  div {
    display: flex;
    justify-content: space-evenly;
    gap: 12px;

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

      @media (max-width: 500px) {
        width: 100%;
      }
    }
  }
`;
