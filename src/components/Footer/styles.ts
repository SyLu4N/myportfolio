import styled from 'styled-components';

export const Container = styled.footer`
  margin: 20rem -10rem -5rem -10rem;
  padding-top: 4rem;
  position: relative;

  background: linear-gradient(to bottom, blue, #4e4ec7);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  position: absolute;
  top: -15%;
  left: 15%;

  width: 1000px;
  background-color: #141c3a;
  padding: 3rem;
  border-radius: 1rem;
  color: white;

  p {
    text-align: center;
    max-width: 300px;
    font-size: 1.2rem;
  }

  a {
    background-color: transparent;
    border: 2px solid blue;
    border-radius: 2rem;

    transition: background-color 300ms;
    padding: 1rem;

    font-size: 1.2rem;
    font-weight: bold;
    color: white;

    &:hover {
      background-color: blue;
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
