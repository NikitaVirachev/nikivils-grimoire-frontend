import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Svg = styled(Icon)`
  width: 2.4rem;
  height: 2.4rem;
`;

interface LoupeProps {
  title: string;
  className?: string;
}

const Loupe = ({ title, className }: LoupeProps) => {
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
        fill='currentColor'
        d='M9.58301 2.31079C13.8784 2.31079 17.3611 5.79279 17.3613 10.0881L17.3516 10.4885C17.2911 11.6818 16.9599 12.8032 16.4209 13.7952L21.7549 19.1282C22.3407 19.714 22.3407 20.6645 21.7549 21.2502C21.1692 21.8358 20.2196 21.8357 19.6338 21.2502L14.4971 16.1135C13.157 17.2076 11.4477 17.8665 9.58301 17.8665L9.18359 17.8567C5.07385 17.6486 1.80566 14.2496 1.80566 10.0881C1.8059 5.79293 5.2878 2.31103 9.58301 2.31079ZM9.58301 5.31079C6.94466 5.31103 4.8059 7.44979 4.80566 10.0881C4.80566 12.7267 6.94451 14.8662 9.58301 14.8665C12.2217 14.8665 14.3613 12.7268 14.3613 10.0881C14.3611 7.44964 12.2216 5.31079 9.58301 5.31079Z'
      />
    </Svg>
  );
};

export default Loupe;
