import styled from 'styled-components';

interface ContentProps {
  isWork: string;
}

export const Container = styled.div`
  margin-top: 8rem;
  padding-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 3rem;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  gap: 3rem;

  button[type='button'] {
    color: ${({ isWork }) =>
      isWork === 'Work' ? 'blue' : 'rgba(0, 0, 245, 0.5)'};
  }

  button[type='submit'] {
    color: ${({ isWork }) =>
      isWork === 'Study' ? 'blue' : 'rgba(0, 0, 245, 0.5)'};
  }

  h3 button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: 300ms;

    font-size: 1.2rem;
    font-weight: bold;
    background-color: transparent;

    &:hover {
      filter: brightness(0.6);
    }
  }
`;

export const AnimaContent = styled.div`
  height: 400px;
  width: 430px;
  overflow: hidden;
  position: relative;
`;
