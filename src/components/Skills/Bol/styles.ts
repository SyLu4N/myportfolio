import styled from 'styled-components';

export const Container = styled.em`
  display: flex;
  align-items: center;
  height: 20px;

  div {
    display: inline-block;

    width: 15px;
    height: 15px;
    background-color: var(--title);
    border-radius: 100%;

    transition: all 200ms;
  }
`;
