import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 2rem;

  .teste {
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 100%;
    max-width: 300px;

    span img {
      border: 1px solid black;
      border-radius: 100%;
    }
  }

  p {
    max-width: 500px;
  }
`;
