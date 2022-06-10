import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi";

interface ContainerProps {
  theme: string;
}

export const Padding = styled.div`
  height: 75px;
`;

export const SocialIcon = styled(HiOutlineHome)``;

export const Container = styled.header<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  height: 75px;
  padding: 0 10rem;
  background-color: var(--background);
  z-index: 2;
  transition: background-color 600ms;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  p {
    position: absolute;
    bottom: 0;
    left: -15%;
    right: -15.5%;

    height: 1px;
    background-color: ${({ theme }) =>
      theme === "ligth" ? "#eee" : "#303134"};
  }

  h1 {
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

  @media (max-width: 1000px) {
    padding: 0 1rem;

    nav .theme {
      margin-right: 0rem;
      margin-left: 1.2rem;
    }

    p {
      width: 100vw;
    }
  }
`;
