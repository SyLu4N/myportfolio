import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: right;
  font-size: 1.2rem;

  a {
    display: inline-flex;
    align-items: center;

    svg {
      box-sizing: content-box;

      border: 1px solid black;
      border-radius: 100%;
      padding: 0.2rem;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
