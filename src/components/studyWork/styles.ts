import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8rem;
  padding-top: 4rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: blue;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3rem;
  color: blue;

  margin-bottom: 7rem;

  h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
