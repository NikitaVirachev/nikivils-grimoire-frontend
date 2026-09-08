import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Svg = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;

  color: var(--white-color);
`;

interface BurgerProps {
  title: string;
  className?: string;
}

const Cross = ({ title, className }: BurgerProps) => {
  const titleId = React.useId();
  return (
    <Svg
      role='img'
      viewBox='0 0 24 24'
      aria-labelledby={titleId}
      className={className}
    >
      <title id={titleId}>{title}</title>
      <rect
        width='29.9443'
        height='4'
        rx='2'
        transform='matrix(-0.707107 0.707107 0.707107 0.707107 21.1738 0)'
        fill='currentColor'
      />
      <rect
        x='2.82861'
        width='29.9443'
        height='4'
        rx='2'
        transform='rotate(45 2.82861 0)'
        fill='currentColor'
      />
    </Svg>
  );
};

export default Cross;
