import { createGlobalStyle } from 'styled-components';

import { light, dark } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  :root{
    --background: ${({ theme }) =>
      theme === 'dark' ? `${dark.background}` : `${light.background}`};
    --title: ${({ theme }) =>
      theme === 'dark' ? `${dark.title}` : `${light.title}`};
    --letter: ${({ theme }) =>
      theme === 'dark' ? `${dark.letter}` : `${light.letter}`};
    --details: ${({ theme }) =>
      theme === 'dark' ? `${dark.details}` : `${light.details}`};

    --backgroundScroll: ${({ theme }) =>
      theme === 'dark' ? `#2A2A2C` : `#F1F3F5`};

    --projects-background: ${({ theme }) =>
      theme === 'dark' ? `rgba(0, 0, 0, 0.1)` : `rgba(200, 200, 200, 0.1)`};

    --projects-border: ${({ theme }) =>
      theme === 'dark'
        ? `rgba(255, 255, 255, 0.1)`
        : `rgba(100, 100, 100, 0.1)`};
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;

    @media (max-width: 1000px) {
      font-size: 93.75%;   
    }

    @media (max-width: 720px) {  
        font-size: 87.5%;
    }
  }

  body {
    transition: all 600ms;
    background-color: var(--background);
    scroll-behavior: smooth;
    overflow: hidden;
    
    &::-webkit-scrollbar{
      width: 12px;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      background: var(--backgroundScroll);
    }

    &::-webkit-scrollbar-thumb{
      background-color: var(--title);
      opacity: 0.8;
      transition: all 300ms;
      border-radius: 6px;

      &:hover {
        background-color: var(--details);
      }
    }
  }


  h1, h2, h3 {
    color: var(--title);
  }

  p {
    color: var(--letter);
  }

  a {
    color: var(--title);
    text-decoration: none;
 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border-radius: 0.6rem;
    background-color: var(--title);
    color: var(--background);
    font-size: 1rem;
    font-style: normal;
    font-weight: bold;

    width: 180px;
    height: 40px;
    margin-top: 1rem;
    transition: 300ms;

    &:hover {
      background-color: var(--details);
    }
  }

  button {
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
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
      border-radius: 0  0 1rem 1rem;
      animation: 300ms aparecerMenuMobile linear;

      span svg{
        display: flex;
      }

      @keyframes aparecerMenuMobile {
        0% {
          margin-top: -40%;
        }
        100% {
          margin-top: 0%;
       }
      }

    }
  }

  .animationHeaderUp {
    position: fixed;
    animation: 400ms headerCima linear;
    margin-top: 0px;

    @media (max-width: 1000px) {
      padding: 0 1rem;
    }
  }

  .animationHeaderDow {
    position: relative;
    animation: 1s headerBaixo linear;
    margin-top: -75px;

    @media (max-width: 1000px) {
      padding: 0 1rem;
    }
  }

`;
