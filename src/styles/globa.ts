import { createGlobalStyle } from "styled-components";
import { ligth, dark } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  :root{
    --background: ${({ theme }) =>
      theme === "dark" ? `${dark.background}` : `${ligth.background}`};
    --title: ${({ theme }) =>
      theme === "dark" ? `${dark.title}` : `${ligth.title}`};
    --letter: ${({ theme }) =>
      theme === "dark" ? `${dark.letter}` : `${ligth.letter}`};
    --details: ${({ theme }) =>
      theme === "dark" ? `${dark.details}` : `${ligth.details}`};
  }

   html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    
    body {
        transition: all 600ms;
        background-color: var(--background);
        padding: 0 10rem;
        scroll-behavior: smooth;

        &::-webkit-scrollbar{
          width: 12px;
          background: var(--background);
        }

        &::-webkit-scrollbar-thumb{
          background-color: var(--title);
          transition: all 300ms;

          &:hover {
            background-color: var(--details);
          }
        }

        @media (max-width: 1000px) {
          padding: 0 1rem;
        }
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
      padding-bottom: 2rem;
      padding-left: 0.5rem;
      padding-top: 1rem;
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6);
      border-radius: 0  0 1rem 1rem;
      animation: 300ms aparecerMenuMobile linear;

      span svg{
        display: flex;
      }

      @keyframes aparecerMenuMobile {
        0% {
          bottom: 200%;
          margin-top: -40%;
        }
        100% {
          bottom: -300%;
          margin-top: 0%;
       }
      }

    }
  }

  .animationHeaderUp {
    position: fixed;
    animation: 400ms headerCima linear;
    padding: 0 10rem;
    padding-left: 0;
    margin-top: 0px;

    @media (max-width: 1000px) {
      padding: 0 1rem;
    }
  }

  .animationHeaderDow {
    position: relative;
    animation: 1s headerBaixo linear;
    padding: 0 10rem;
    padding-left: 0;
    margin-top: -75px;

    @media (max-width: 1000px) {
      padding: 0 1rem;
    }
  }

  @media (max-width: 1000px) {
    html{
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html{
      font-size: 87.5%;
    }
  }
`;
