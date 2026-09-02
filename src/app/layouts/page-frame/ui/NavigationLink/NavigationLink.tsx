import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { PrimarlyFrame, SecondaryFrame } from '../../../../../shared/ui/frames';

const NavigationLink = styled(NavLink)<{ $size?: string }>`
  font-family: 'Metamorphous', serif;
  font-size: var(--small);
  font-size: ${(props) => (props.$size === 'big' ? 'var(--p)' : 'var(--small)')};
  color: var(--tertiary-color);
  text-decoration: none;

  height: ${(props) => (props.$size === 'big' ? '3.5rem' : '2.6rem')};

  display: flex;
  justify-content: center;
  align-items: center;

  background:
    linear-gradient(
      to bottom,
      color-mix(in srgb, var(--white-color) 50%, transparent),
      color-mix(in srgb, var(--grey-color) 50%, transparent) 28%,
      color-mix(in srgb, var(--grey-color) 50%, transparent) 68%,
      color-mix(in srgb, var(--secondary-bg-color) 50%, transparent)
    ),
    var(--secondary-bg-color);

  ${SecondaryFrame};

  &:hover:not(.active) {
    filter: drop-shadow(0 0 0.7rem var(--secondary-color));
  }

  &.active {
    background:
      linear-gradient(
        to bottom,
        color-mix(in srgb, var(--white-color) 50%, transparent),
        color-mix(in srgb, var(--grey-color) 50%, transparent) 28%,
        color-mix(in srgb, var(--grey-color) 50%, transparent) 68%,
        color-mix(in srgb, var(--secondary-bg-color) 50%, transparent)
      ),
      var(--tertiary-color);

    ${PrimarlyFrame};

    color: var(--secondary-tp-color);
    text-shadow: 0 0 0.2rem var(--primarly-tp-color);
  }
`;

export default NavigationLink;
