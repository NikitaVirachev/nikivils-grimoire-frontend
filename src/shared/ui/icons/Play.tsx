import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Svg = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;
`;

interface PlayProps {
  title: string;
  className?: string;
}

const Play = ({ title, className }: PlayProps) => {
  const titleId = React.useId();
  return (
    <Svg
      role='img'
      viewBox='0 0 21 24'
      aria-labelledby={titleId}
      className={className}
    >
      <title id={titleId}>{title}</title>
      <path
        fill='currentColor'
        d='M19 12L2 22L2 2L19 12Z'
      />
    </Svg>
  );
};

export default Play;
