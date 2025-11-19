import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${styles}
`;

export default GlobalStyle;
