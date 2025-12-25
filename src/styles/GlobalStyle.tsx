import { createGlobalStyle, css } from 'styled-components';

import Coelacanth from '../assets/fonts/Coelacanth.otf';
import Metamorphous from '../assets/fonts/Metamorphous-Regular.ttf';
import ElderFuthark from '../assets/fonts/Rune.ttf';
import { respond } from './Mixins';

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
    overflow: hidden;
  }

  @font-face {
    font-family: 'Coelacanth', serif;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${Coelacanth}) format('opentype');
  }

  @font-face {
    font-family: 'Metamorphous';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${Metamorphous}) format('truetype');
  }

  @font-face {
    font-family: 'Elder Futhark';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${ElderFuthark}) format('truetype');
  }

  // Variables

  :root {
    // Colors
    --primarly-color: #c52f21;
    --secondary-color: #f59d39;
    --tertiary-color: #fae5b3;
    --grass-color: #657c4a;
    --grass-bottom-ton: #354425;
    --grass-middle-ton: #2a3b18;
    --grass-top-ton: #253710;
    --silver-color: #c0c0c0;
    --white-color: #fff;
    --grey-color: #4f4f4f;
    --eye-color: #a18181;

    // Background
    --primarly-bg-color: #fbfbd4;
    --secondary-bg-color: #211b1b;
    --gold-bg-color: #98713a;

    // Typography
    --primarly-tp-color: #ff1100;
    --secondary-tp-color: #000000;
    --tertiary-tp-color: #808080;

    // Font sizes
    --h1: 3.2rem;
    --h2: 2rem;
    --h3: 1.6rem;
    --h4: 1.8rem;
    --p: 1.6rem;
    --small: 1.2rem;

    ${respond(
      'tab-portrait',
      css`
        --h1: 2.6rem;
      `
    )}
  }
`;

const GlobalStyle = createGlobalStyle`
  ${styles}
`;

export default GlobalStyle;
