import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Svg = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;

  color: var(--secondary-bg-color);
`;

interface BurgerProps {
  title: string;
  className?: string;
}

const Burger = ({ title, className }: BurgerProps) => {
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
        x='2'
        y='2'
        width='20'
        height='4'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='2'
        y='10'
        width='20'
        height='4'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='2'
        y='18'
        width='20'
        height='4'
        rx='2'
        fill='currentColor'
      />
    </Svg>
  );
};

export default Burger;
