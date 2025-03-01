import styled from 'styled-components';

export const Container = styled.section`
  padding: 0 10%;

  @media (max-width: 500px) {
    padding: 0 4%;
  }
`;

export const Header = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;

  text-align: center;

  @media (max-width: 500px) {
    margin-top: 2rem;
  }
`;

export const Content = styled.article`
  display: flex;
  gap: 60px;
  flex-direction: column;
`;
