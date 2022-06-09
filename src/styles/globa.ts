import { createGlobalStyle } from 'styled-components';
import { ligth, dark } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  :root{
    --background: ${({ theme }) =>
      theme === 'dark' ? `${dark.background}` : `${ligth.background}`};
    --title: ${({ theme }) =>
      theme === 'dark' ? `${dark.title}` : `${ligth.title}`};
    --letter: ${({ theme }) =>
      theme === 'dark' ? `${dark.letter}` : `${ligth.letter}`};
    --details: ${({ theme }) =>
      theme === 'dark' ? `${dark.details}` : `${ligth.details}`};
  }

   html {
    scroll-behavior: smooth;

    body {
        transition: all 600ms;
        background-color: var(--background);
        padding: 0 10rem;
        scroll-behavior: smooth;
      }
   }

   h1, h2, h3 {
     color: var(--title);
   }

   p {
     color: var(--letter);
   }

  a{
    color: var(--title);
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

  #grid {
    display: flex;

    @media (max-width: 750px) {
      display: grid;
      background-color: var(--background);
      padding-bottom: 1rem;
      padding-left: 0.5rem;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6);
      border-radius: 0  0 1rem 1rem;
      animation: 300ms aparecerMenuMobile linear;

      span svg{
        display: flex;
      }

      @keyframes aparecerMenuMobile {
        0% {
          bottom: 200%;
          margin-top: -30%;
        }
        100% {
          bottom: -240%;
          margin-top: 0%;
       }
      }
    }
  }

  .animationHeaderUp {
    position: fixed;
    animation: 400ms headerCima linear;
    padding: 0 10rem;
    margin-top: 0px;

    @media (max-width: 1000px) {
      padding: 0 1rem;
    }
  }

  .animationHeaderDow {
    position: relative;
    animation: 1s headerBaixo linear;
    padding: 0 10rem;
    margin-top: -75px;

    @media (max-width: 1000px) {
      padding: 0 1rem;
    }
  }
`;
