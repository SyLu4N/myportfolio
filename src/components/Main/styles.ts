import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 2rem;

  h1 {
    font-size: 2.5rem;
    color: blue;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border-radius: 0.8rem;
    background-color: blue;
    color: white;
    font-size: 1rem;

    width: 200px;
    height: 40px;
    margin-top: 1rem;
  }
`;
