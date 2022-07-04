import styled from "styled-components";

export const Header = styled.div`
  margin-top: 8rem;
  padding-top: 6rem;

  text-align: center;

  p {
    color: var(--details);
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
  }
`;

export const Container = styled.div`
  padding: 0 10rem;
`;
