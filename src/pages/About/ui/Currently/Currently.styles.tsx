import styled from 'styled-components';

export const Content = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0.2rem;
`;

export const Topic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Name = styled.dt`
  font-size: var(--h4);
  line-height: var(--lh4);
  font-weight: bold;
`;

export const Value = styled.dd`
  font-size: var(--p);
  line-height: var(--lh-p);
`;
