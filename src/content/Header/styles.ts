import styled from 'styled-components';

interface ContainerProps {
  theme: string;
}

export const Padding = styled.div`
  height: 75px;
`;

export const Container = styled.header<ContainerProps>`
  height: 75px;
  background-color: var(--background);
  z-index: 2;

  padding: 0 1rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  position: relative;

  p {
    position: absolute;
    bottom: 0;
    left: -15%;
    right: -15%;

    height: 1px;
    background-color: ${({ theme }) =>
      theme === 'ligth' ? '#eee' : '#303134'};
  }

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
