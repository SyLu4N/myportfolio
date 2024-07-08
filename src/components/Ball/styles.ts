import styled from 'styled-components';

export const Container = styled.em`
  height: 50px;

  div {
    display: inline-flex;
    gap: 3px;

    span {
      display: block;
      width: 15px;
      height: 15px;

      background-color: var(--title);
      border-radius: 100%;

      transition: all 200ms;

      &.empty {
        opacity: 0.3;
      }
    }
  }
`;
