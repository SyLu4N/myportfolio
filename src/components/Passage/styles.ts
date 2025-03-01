import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 100%;
`;

export const LollipopContainer = styled.div<{ ballEnd: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    height: 80px;
    width: 2px;

    background-color: var(--title);
  }

  span {
    height: 12px;
    width: 12px;

    background-color: var(--title);
    border-radius: 100%;
  }

  @media (max-width: 500px) {
    div {
      height: 60px;
      width: 2px;
    }

    span {
      height: 10px;
      width: 10px;
    }
  }
`;

type ContentProps = {
  position: 'left' | 'right';
  ballEnd: boolean;
};

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;

  position: absolute;

  ${({ position }) => (position === 'left' ? 'left: 55%;' : 'right: 55%;')}

  transform: translateY(-50%);

  text-align: ${({ position }) => position};

  width: max-content;
  max-width: 240px;
  color: var(--letter);

  time {
    display: flex;
    align-items: center;
    justify-content: ${({ position }) => position};
    gap: 0.5rem;

    margin-top: 0.5rem;
    opacity: 0.7;

    font-style: italic;
    font-size: 0.85rem;
  }

  @media (max-width: 500px) {
    ${({ position }) => (position === 'left' ? 'left: 53%;' : 'right: 53%;')}
    width: auto;
    max-width: 150px;
  }
`;
