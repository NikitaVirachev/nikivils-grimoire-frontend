import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Svg = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;

  color: var(--secondary-bg-color);
`;

interface WedgeProps {
  title: string;
  className?: string;
}

const Wedge = ({ title, className }: WedgeProps) => {
  const titleId = React.useId();
  return (
    <Svg
      role='img'
      viewBox='0 0 24 24'
      aria-labelledby={titleId}
      className={className}
    >
      <title id={titleId}>{title}</title>
      <path
        d='M20.5 12L3.5 22V19.0586L15.5 12L3.5 4.94043V2L20.5 12Z'
        fill='currentColor'
      />
    </Svg>
  );
};

export default Wedge;
