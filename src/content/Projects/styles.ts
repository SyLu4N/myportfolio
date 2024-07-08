import styled from 'styled-components';

export const Container = styled.section`
  transition: all 300ms;
  margin-bottom: 15rem;
`;

export const Projects = styled.article`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(334px, 334px));
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  margin-top: 5rem;
  margin-bottom: 3rem;

  @media (max-width: 500px) {
    gap: 6px;

    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`;

interface FilterProps {
  name: string;
  filterCurrent: string;
}

export const Filter = styled.p<FilterProps>`
  font-size: 20px;
  color: ${({ filterCurrent, name }) =>
    name === filterCurrent ? 'var(--background)' : 'var(--details)'};

  padding: 6px 14px;

  transition: 300ms all;
  cursor: pointer;

  border-radius: 6px;
  background-color: ${({ filterCurrent, name }) =>
    name === filterCurrent ? 'var(--details)' : 'transparant'};

  @media (max-width: 500px) {
    font-size: 14px;

    padding: 4px 10px;
  }
`;
