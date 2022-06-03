import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 250px;
  border-radius: 1rem;

  animation: 300ms;

  p {
    display: none;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    z-index: 1;

    flex-direction: column;
    justify-content: space-between;

    padding: 1.5rem;
    font-size: 1.3rem;
    text-align: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      width: 100%;
      padding: 0.7rem;
      position: relative;

      color: #ff57b2;
      font-weight: bold;
      font-size: 1.1rem;

      border: 1px solid #ff57b2;
      border-radius: 3rem;

      transition: 300ms;

      svg {
        position: absolute;
        right: 1rem;
      }

      &:hover {
        background: #ff57b2;
        color: white;
      }
    }

    color: white;
    background-color: rgba(1, 2, 0, 0.7);
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
        size: 2%;
        margin-right: 5.5%;
      }
    }
  }

  img {
    border-radius: 1rem;
  }
`;
