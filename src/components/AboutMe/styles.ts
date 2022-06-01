import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3rem;

  h1 {
    width: 100%;

    font-size: 2.5rem;
    text-align: left;

    span {
      color: blue;
    }
  }

  p {
    margin-top: 0.8rem;
    max-width: 660px;
    font-size: 1.2rem;
  }
`;
