import { css } from 'styled-components';

const formControl = css`
  background-color: inherit;
  border: none;
  outline: none;
  height: 2rem;
  min-width: 0;

  font-family: 'Coelacanth', serif;
  font-size: var(--p);
  line-height: var(--lh-p);
  color: var(--secondary-tp-color);

  &::placeholder {
    color: var(--tertiary-tp-color);
    opacity: 1;
  }
`;

export default formControl;
