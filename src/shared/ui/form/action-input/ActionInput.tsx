import { InputForm } from './ActionInput.styles';
import { Input } from '../input';

interface InputProps {
  name: string;
  className?: string;
  placeholder: string;
  value: string;
  changeInputHandler: React.ChangeEventHandler<HTMLInputElement>;
  onSubmitHandler: React.FormEventHandler<HTMLFormElement>;
  action: React.ReactNode;
}

const ActionInput = ({
  name,
  className,
  placeholder,
  value,
  changeInputHandler,
  onSubmitHandler,
  action,
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
    {action}
  </InputForm>
);

export default ActionInput;
