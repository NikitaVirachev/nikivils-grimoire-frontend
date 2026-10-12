import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Sword } from '@/shared/ui/icons';

export const SwordLinkWrapper = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  height: 2.6rem;
  padding: 0 1rem;

  font-size: var(--p);
  color: var(--secondary-tp-color);
  text-decoration: none;
  transition: all 0.3s;

  svg .sword-highlight {
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    color: var(--primarly-tp-color);
    text-decoration: underline;
    filter: drop-shadow(0.2rem 0.4rem 0.4rem rgba(0, 0, 0, 0.5));

    svg .sword-highlight {
      opacity: 1;
    }
  }
`;

export const LinkSword = styled(Sword)`
  width: 8.7rem;
`;

export const RotatedLinkSword = styled(LinkSword)`
  transform: rotateY(180deg);
`;
