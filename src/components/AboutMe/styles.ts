import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  padding-top: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    text-align: center;
    margin-bottom: 2rem;

    p {
      color: var(--details);
    }
  }

  @media (max-width: 1200px) {
    padding-top: 5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;

  margin-top: 2rem;

  img {
    width: 400px;
  }

  em {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-top: 1.3rem;

    max-width: 400px;
    height: 400px;
    font-size: 1.3rem;
    text-align: justify;
    color: var(--letter);
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    padding-top: 0rem;
    gap: 0rem;

    em {
      padding-top: 0.4rem;
      justify-content: start;
    }
  }

  @media (max-width: 650px) {
    margin-top: 0rem;

    img {
      width: 100%;
    }

    em a {
      width: 100%;
    }
  }
`;
