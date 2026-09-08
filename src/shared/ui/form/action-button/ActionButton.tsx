import type { ComponentPropsWithRef, ReactNode } from 'react';

import Button from './ActionButton.styles';

interface ActionButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
}

const ActionButton = ({ children, type = 'button', ...props }: ActionButtonProps) => {
  return (
    <Button
      type={type}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
