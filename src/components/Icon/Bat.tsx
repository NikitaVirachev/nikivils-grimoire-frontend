import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Svg = styled(Icon)`
  width: 4.8rem;
  height: 2.4rem;

  color: var(--secondary-bg-color);
`;

interface BatProps {
  title: string;
  className?: string;
}

const Bat = ({ title, className }: BatProps) => {
  const titleId = React.useId();
  return (
    <Svg
      role='img'
      viewBox='0 0 48 24'
      aria-labelledby={titleId}
      className={className}
    >
      <title id={titleId}>{title}</title>
      <path
        fill='currentColor'
        d='M28 0C28.5848 2.29204 28.8532 3.59139 28.0303 5.91016C33.4452 5.6506 37.5134 4.79668 41 3C43.5 3.5 47.3755 6.67256 48 11.1475C47.5101 11.0507 47.0093 11 46.5 11C42.9066 11 39.7357 13.4933 37.8428 17.2949C36.5192 16.4635 35.0489 16 33.5 16C29.4247 16 25.8945 19.2072 24.1543 23.8926C24.1304 23.9569 24.0686 24 24 24C23.9314 24 23.8696 23.9569 23.8457 23.8926C22.1055 19.2072 18.5753 16 14.5 16C12.9511 16 11.4808 16.4635 10.1572 17.2949C8.26432 13.4933 5.09344 11 1.5 11C0.990677 11 0.489942 11.0507 0 11.1475C0.624477 6.67256 4.5 3.5 7 3C10.4863 4.79658 14.5543 5.65055 19.9688 5.91016C19.146 3.59158 19.4152 2.29194 20 0C20.5445 1.94749 21.1037 2.96315 22.5752 4.16504C23.0179 4.05949 23.498 4 24 4C24.5017 4 24.9814 4.05964 25.4238 4.16504C26.8958 2.96294 27.4554 1.94775 28 0Z'
      />
    </Svg>
  );
};

export default Bat;
