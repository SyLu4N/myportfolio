import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  margin-bottom: 3rem;

  h1 {
    font-size: 1.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      display: inline-flex;
      align-items: center;
    }

    div {
      display: flex;
      align-items: center;

      margin-right: -6rem;
      margin-left: 3rem;

      transition: all 400ms;

      img {
        display: block;
        cursor: pointer;
      }
    }
  }
`;
