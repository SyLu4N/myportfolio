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
    border-radius: 4rem 0rem;
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

    a {
      padding: 1rem;
    }
  }

  @media (max-width: 1200px) {
    padding-top: 0rem;

    em {
      padding-top: 1.2rem;
      justify-content: start;
      max-width: 800px;
      margin-right: -5rem;
    }

    img {
      width: 50%;
    }
  }

  @media (max-width: 1000px) {
    em {
      padding-top: 1rem;
      margin-right: 0;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    margin-top: 0rem;
    padding: 2rem;
    gap: 1rem;

    em {
      padding-top: 1rem;
    }

    img {
      width: 100%;
    }

    em a {
      width: 100%;
    }
  }
`;
