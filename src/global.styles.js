import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

  * { box-sizing: border-box; }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  ul, ol, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  a,
  a:hover,
  a:active,
  a:visited {
    color: inherit;
    text-decoration: inherit;
  }

  body {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.defaultText};
  }
`