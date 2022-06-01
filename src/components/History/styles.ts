import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 3rem;

  margin-top: 2rem;
  padding-bottom: 18rem;

  .image {
    margin-top: -2rem;
  }
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
    margin-top: 0.9rem;
    max-width: 450px;
    font-size: 1.3rem;
  }
`;
