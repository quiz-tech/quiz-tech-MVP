import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
body {
    line-height: 1;
    background-color: #fff;
  }
  ol, ul,li {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background-color: inherit;
    vertical-align: middle;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
`;

export default GlobalStyle;