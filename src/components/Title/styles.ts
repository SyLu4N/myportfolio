import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  height: 67px;

  h1 {
    color: var(--details);
    font-size: 3.3rem;
    opacity: 1;
  }

  p {
    margin-top: -2.5rem;
    color: var(--title);
    font-size: 2rem;
    font-weight: bold;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 3rem;
    }

    p {
      margin-top: -2.4rem;
      font-size: 1.8rem;
    }
  }
`;
