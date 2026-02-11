import { css } from 'styled-components';

const CrossDiagonals = (color = 'var(--grass-bottom-ton)', thickness = '2px') => css`
  --diag-width: ${thickness};

  background-image:
    /* левая нижняя -> правая верхняя */
    linear-gradient(
      to top right,
      transparent calc(50% - var(--diag-width)),
      ${color} calc(50% - var(--diag-width)),
      ${color} calc(50% + var(--diag-width)),
      transparent calc(50% + var(--diag-width))
    ),
    /* левая верхняя -> правая нижняя */
      linear-gradient(
        to bottom right,
        transparent calc(50% - var(--diag-width)),
        ${color} calc(50% - var(--diag-width)),
        ${color} calc(50% + var(--diag-width)),
        transparent calc(50% + var(--diag-width))
      );
`;

export default CrossDiagonals;
