import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  div h1 {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: blue;
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;

  div {
    position: relative;
    overflow: hidden;
    border-radius: 0.4rem;
    width: 240px;
    height: 240px;

    animation: 300ms;

    img {
      width: 240px;
    }

    p {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      color: white;
      background-color: rgba(0, 0, 0, 0.7);
    }

    &:hover p {
      animation: 300ms aparecer linear;
      display: flex;

      svg {
        animation-delay: 1s;
        animation: 500ms arrow infinite alternate-reverse;
      }

      @keyframes aparecer {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes arrow {
        0% {
          margin-left: 8.5%;
        }
      }
    }
  }
`;

export const Apresentacao = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.5rem;

  font-size: 1.1rem;

  a {
    display: flex;
    align-items: center;
    gap: 1rem;

    width: 100%;
    padding: 0.7rem;

    color: #ff57b2;
    font-weight: bold;
    border: 1px solid #ff57b2;
    border-radius: 3rem;

    transition: 300ms;

    &:hover {
      background: #ff57b2;
      color: white;
    }
  }
`;
