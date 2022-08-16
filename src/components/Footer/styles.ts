import styled from 'styled-components';

export const Container = styled.footer`
  margin: 15rem -9rem -5rem -9rem;
  padding-top: 3rem;
  text-align: center;
  position: relative;

  background: linear-gradient(to bottom, var(--title), #4e4ec7);

  strong {
    display: block;
    color: white;
    font-weight: normal;
    padding-bottom: 2rem;
    margin-top: -2rem;
  }

  @media (max-width: 1000px) {
    margin: 8rem -1rem 0 -1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    position: absolute;
    top: -14%;

    background-color: #141c3a;
    padding: 3rem;
    margin: 0 1rem;
    border-radius: 1rem;
    color: white;
  }

  h1 {
    color: white;
  }

  p {
    text-align: center;
    max-width: 300px;
    font-size: 1.2rem;
    color: white;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;
    border: 2px solid var(--title);
    border-radius: 1rem;

    transition: all 300ms;
    padding: 0.8rem;

    font-size: 1.2rem;
    font-weight: bold;
    color: white;

    &:hover {
      color: white;
      background-color: var(--title);
    }
  }

  @media (max-width: 680px) {
    padding-top: 3rem;

    div {
      flex-direction: column;
      top: -22%;
      width: 92vw;
      padding: 2rem;
      gap: 2rem;
    }
  }
`;

export const Finish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  padding-bottom: 4rem;

  img {
    width: 90px;
    height: 90px;
    border-radius: 100%;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    text-align: center;

    width: 300px;
    margin-right: 0.2rem;

    color: rgba(255, 255, 255, 0.4);
  }

  span {
    display: flex;
    gap: 2rem;

    margin-top: 2rem;

    a {
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: 100%;
      width: 50px;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 300ms;

      svg {
        color: white;
      }

      &:hover {
        background-color: white;

        svg {
          color: #4242d0;
        }
      }
    }
  }
`;
