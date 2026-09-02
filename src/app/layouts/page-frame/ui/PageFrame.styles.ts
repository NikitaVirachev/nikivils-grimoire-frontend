import styled, { css } from 'styled-components';

import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import MobileNavigation from './MobileNavigation/MobileNavigation';

import { respond } from '../../../../shared/lib/styles';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, [col-start] 20rem [col-end]);
  grid-template-rows: auto auto 1fr;
  column-gap: 2rem;
  row-gap: 1rem;
  align-content: start;

  height: 100%;
  padding-bottom: 1rem;

  position: relative;
  z-index: 5;

  ${respond(
    'tab-portrait',
    css`
      grid-template-columns: repeat(4, [col-start] 19rem [col-end]);
      column-gap: 0.5rem;
      row-gap: 0.5rem;
    `
  )}

  ${respond(
    'phone',
    css`
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      column-gap: 0.5rem;
      row-gap: 0.5rem;

      padding: 0 1.5rem 1rem 1.5rem;
    `
  )}
`;

export const StyledHeader = styled(Header)`
  grid-column: -1 / 1;
`;

export const StyledNavbar = styled(Navbar)`
  grid-column: -1 / 1;

  ${respond(
    'phone',
    css`
      display: none;
    `
  )}
`;

export const StyledMobileNavigation = styled(MobileNavigation)`
  display: none;

  ${respond(
    'phone',
    css`
      display: block;
    `
  )}
`;
