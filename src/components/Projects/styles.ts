import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 3rem;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: blue;
  }

  .projects {
    display: flex;
    justify-content: space-between;

    margin-top: 2rem;
  }
`;
