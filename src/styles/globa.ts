import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    padding: 3rem 10rem;
  }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
    outline: none;
    border: none;
  }
`;
