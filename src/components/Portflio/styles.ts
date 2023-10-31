import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 15rem;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  min-height: 1255px;
  margin-top: 5rem;
  text-align: justify;

  .aparecerLeft {
    display: flex !important;
    animation: aparecerLeft 800ms linear;
  }

  .aparecerRight {
    display: flex;
    animation: aparecerRight 800ms linear;
  }

  @keyframes aparecerLeft {
    0% {
      opacity: 0.3;
      margin-left: -20%;
    }

    100% {
      opacity: 1;
      margin-left: 0;
    }
  }

  @keyframes aparecerRight {
    0% {
      opacity: 0.3;
      margin-right: -20%;
    }

    100% {
      opacity: 1;
      margin-right: 0;
    }
  }
`;
