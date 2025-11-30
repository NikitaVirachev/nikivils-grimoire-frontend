import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon/Icon';

const Svg = styled(Icon)`
  width: 3.5rem;
  height: 4rem;

  color: var(--tertiary-color);
  filter: drop-shadow(0 0 3.66rem var(--tertiary-color)) drop-shadow(0 0 5.04rem var(--white-color));
`;

const Crescent = ({ title = 'Crescent' }) => {
  const titleId = React.useId();
  return (
    <Svg
      role='img'
      viewBox='0 0 35 40'
      aria-labelledby={titleId}
    >
      <title id={titleId}>{title}</title>
      <path
        fill='currentColor'
        d='M20.1006 0C25.6068 9.29341e-05 30.5455 2.204 34.126 5.77246C31.9309 4.63983 29.4401 4.00003 26.7998 4C17.9633 4 10.7998 11.1635 10.7998 20C10.7998 28.8366 17.9632 36 26.7998 36C29.4403 36 31.9308 35.3593 34.126 34.2266C30.5455 37.7953 25.607 39.9999 20.1006 40C8.99938 40 0 31.0457 0 20C1.61876e-07 8.95431 8.99938 0 20.1006 0Z'
      />
    </Svg>
  );
};

export default Crescent;
