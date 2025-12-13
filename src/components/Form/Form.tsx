import styled, { css } from 'styled-components';

import Play from '../Icon/Play';

const Typography = css`
  background-color: inherit;
  border: none;
  outline: none;
  height: 2rem;
  min-width: 0;

  font-family: 'Coelacanth', serif;
  font-size: var(--p);
  line-height: 2rem;
  color: var(--secondary-tp-color);

  &::placeholder {
    color: var(--tertiary-tp-color);
    opacity: 1;
  }
`;

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

export const Input = styled.input`
  ${Typography};
`;

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

const StyledPlay = styled(Play)`
  width: inherit;
  height: inherit;
`;

interface InputProps {
  name: string;
  className?: string;
  placeholder: string;
  value: string;
  changeInputHandler: React.ChangeEventHandler<HTMLInputElement>;
  onSubmitHandler: React.FormEventHandler<HTMLFormElement>;
}

export const EnterInput = ({
  name,
  className,
  placeholder,
  value,
  changeInputHandler,
  onSubmitHandler,
}: InputProps) => (
  <InputForm
    name={name}
    className={className}
    onSubmit={onSubmitHandler}
  >
    <Input
      placeholder={placeholder}
      value={value}
      onChange={changeInputHandler}
    />
    <Button
      type='submit'
      disabled={value === ''}
    >
      <StyledPlay title='Play button icon' />
    </Button>
  </InputForm>
);
