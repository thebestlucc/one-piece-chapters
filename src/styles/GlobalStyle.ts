import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ONE PIECE';
    src: url('../assets/fonts/ONEPIECE.eot');
    src: url('../assets/fonts/ONEPIECE.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/ONEPIECE.woff2') format('woff2'),
        url('../assets/fonts/ONEPIECE.woff') format('woff'),
        url('../assets/fonts/ONEPIECE.ttf') format('truetype'),
        url('../assets/fonts/ONEPIECE.svg#ONEPIECE') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  :root {
    --maxWidth: 1440px;
    --white: #fefefe;
    --blue: #105edd;
    --softBlue: #58acf4;
    --darknessBlue: #0b3075;
    --yellow: #f8de3c;
    --straw: #D9B26A;
    --brown: #412a1e;
    --coolRed: #c8472c;
  }
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: var(---white);
  }

  h1 {
    font-family: 'ONE PIECE';
    font-size: 4rem;
  }

  .load-btn {
    position: fixed;

  }
`;
