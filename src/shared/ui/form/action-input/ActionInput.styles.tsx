import styled from 'styled-components';

export const InputForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem;
  border: 0.2rem solid var(--primarly-color);
  border-radius: 0.5rem;

  &:focus-within {
    outline: 0.1rem solid var(--primarly-color);
  }
`;
