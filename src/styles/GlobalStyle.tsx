import { createGlobalStyle, css } from 'styled-components';

// import '../assests/fonts/Coelacanth.otf';

const styles = css`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html {
    /* font-size: 10px; */
    /* 10px / 16px = 0.625 = 62.5% */
    /* Percentage of user's browser font-size settings */
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Coelacanth', serif;
    font-style: normal;
    font-weight: 400;
    src: url(../assests/fonts/Coelacanth.otf);
  }
`;

const GlobalStyle = createGlobalStyle`
  ${styles}
`;

export default GlobalStyle;
