import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  background: linear-gradient(to bottom, #4323f0, #072f4e);
  border-radius: 0.8rem 0.8rem 0 0;
  color: white;
  width: 98.7vw;

  padding-bottom: 20rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1.5rem;

    h1 {
      font-size: 1.5rem;
    }
  }
`;
