import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

   body {
    padding: 3rem 10rem;
    scroll-behavior: smooth;
   }

   html {
    scroll-behavior: smooth;

   }

  a{
    text-decoration: none;
  }

  button{
    cursor: pointer;
    outline: none;
    border: none;
  }

  .hidden {
    display: none;
  }
`;
