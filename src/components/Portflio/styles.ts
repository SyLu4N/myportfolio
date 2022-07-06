import styled from "styled-components";

export const Container = styled.div`
  min-height: 1200px;
  margin-bottom: 10rem;
`;

export const Header = styled.div`
  padding-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;

  p {
    color: var(--details);
  }
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

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
