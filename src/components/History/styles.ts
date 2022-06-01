import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: -6.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;

  margin-top: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      border: 1px solid #aaa;
      border-radius: 1rem;

      width: 200px;
      height: 200px;
    }
  }

  em {
    max-width: 500px;
    font-size: 1.3rem;
  }
`;
