import styled from 'styled-components';

const Button = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  cursor: pointer;
  height: fit-content;

  width: 1.3rem;
  height: 1.4rem;

  color: var(--secondary-bg-color);

  &:disabled {
    color: var(--tertiary-tp-color);
  }
`;

export default Button;
