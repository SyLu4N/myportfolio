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
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;

  margin-top: 2rem;

  em {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-top: 1.3rem;

    max-width: 500px;
    height: 400px;
    font-size: 1.3rem;
    text-align: justify;
    color: var(--letter);
  }
`;
