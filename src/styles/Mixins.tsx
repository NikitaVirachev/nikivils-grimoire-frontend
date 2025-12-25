import { css } from 'styled-components';

type Breakpoint = 'phone' | 'tab-landscape' | 'tab-portrait' | 'desktop';
type CssBlock = ReturnType<typeof css>;

export const respond = (breakpoint: Breakpoint, content: CssBlock) => {
  switch (breakpoint) {
    case 'phone':
      return css`
        @media only screen and (width < 800px) {
          ${content};
        }
      `;
    case 'tab-portrait':
      return css`
        @media only screen and (width < 1095px) {
          ${content};
        }
      `;
    case 'tab-landscape':
      return css`
        @media only screen and (width < 1440px) {
          ${content};
        }
      `;
    case 'desktop':
      return css`
        @media only screen and (width >= 1440px) {
          ${content};
        }
      `;
  }
};
