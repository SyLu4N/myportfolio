import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5rem;

  margin-top: 2rem;

  img {
    border-radius: 1rem;
  }

  em {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-width: 500px;
    height: 350px;
    font-size: 1.3rem;
    text-align: justify;
  }
`;
