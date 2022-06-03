import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;

  margin-bottom: 3rem;

  h1 {
    font-size: 1.5rem;
  }

  a {
    display: inline-flex;
    align-items: center;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;
