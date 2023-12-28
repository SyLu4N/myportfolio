import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding-top: 6rem;
  padding-bottom: 7rem;

  position: relative;

  div {
    display: flex;
    flex-direction: column;
    justify-content: start;

    height: 300px;
    max-width: 350px;
    padding-top: 2rem;

    h1 {
      width: 100%;
      color: var(--title);
      position: relative;
      height: 47px;

      text-align: left;
      animation: 1.5s hellow linear;

      &::after {
        content: '|';

        position: absolute;
        top: -0.17rem;
        font-weight: normal;
        color: var(--letter);

        animation: pisca 500ms infinite alternate-reverse;
      }

      @keyframes pisca {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 0.6;
        }
      }
    }

    p {
      font-size: 1.5rem;

      span {
        color: var(--title);
      }
    }

    strong {
      font-weight: normal;
      font-size: 1rem;
      color: var(--letter);

      padding: 0.7rem;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding-bottom: 0;
    padding-top: 20rem;

    div {
      text-align: center;
      margin-top: 3rem;

      h1 {
        text-align: center;
      }

      a {
        width: 100%;
      }
    }
  }
`;

export const ContainerImg = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 300px;
  padding-top: 0px !important;

  .shadow {
    background-color: var(--title);
    border-radius: 100%;
    position: absolute;
    bottom: -5px;

    width: 99%;
  }

  .container-img {
    overflow: hidden;
    margin: auto;
    width: 100%;
    border-radius: 100%;
    transform: rotate(-22deg);
  }

  @media (max-width: 500px) {
    position: absolute;
    top: -2%;

    div {
      position: block;
      margin-top: 6px !important;
      top: 0rem;
    }
  }
`;
