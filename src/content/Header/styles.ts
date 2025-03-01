import styled from 'styled-components';

interface ContainerProps {
  theme: string;
}

export const Container = styled.header<ContainerProps>`
  height: 75px;
  padding: 0 1rem;

  transition: 500ms all;
  z-index: 2;

  background-color: var(--background);
  border-bottom: 1px solid black;
  border-color: ${({ theme }) => (theme === 'ligth' ? '#eee' : '#303134')};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  position: relative;

  h1 {
    width: 30%;
    font-size: 1.5rem;
  }

  @keyframes headerCima {
    0% {
      margin-top: -20%;
    }

    100% {
      margin-top: 0%;
    }
  }

  @keyframes headerBaixo {
    0% {
      margin-top: 0%;
      position: fixed;
    }

    100% {
      margin-top: -20%;
      position: fixed;
    }
  }
`;
