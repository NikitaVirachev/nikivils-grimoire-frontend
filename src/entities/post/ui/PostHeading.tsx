import styled from 'styled-components';

import { typography } from './typography.ts';

const Heading = styled.h2<{
  $level: 1 | 2 | 3 | 4 | 5 | 6;
}>`
  font-family: 'Coelacanth', serif;

  font-size: ${({ $level }) => {
    switch ($level) {
      case 2:
        return typography.h2;

      case 3:
        return typography.h3;

      case 4:
        return typography.h4;

      case 5:
        return typography.h5;

      case 6:
        return typography.h6;

      default:
        return '1rem';
    }
  }};

  line-height: 1.3;
`;

export default Heading;
