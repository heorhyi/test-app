import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }
    
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }

  #${'root'} {
    overflow-x: hidden;
    height: 100%;
  }
`;
