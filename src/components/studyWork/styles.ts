import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  color: white;
  width: 100%;
  padding-bottom: 20rem;
  gap: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  margin-top: 1.5rem;
  background: linear-gradient(to bottom, #4323f0, #072f4e);

  border-radius: 0.8rem 0.8rem 0 0;
  width: 100%;

  h1 {
    display: flex;
    justify-content: center;

    font-size: 1.5rem;
  }

  .main {
    margin-top: 1.8rem;
    color: #eee;

    p {
      font-size: 1rem;
    }

    div {
      width: 100%;
      text-align: right;
      margin-top: 0.4rem;

      a {
        color: white;
      }
    }
  }
`;
