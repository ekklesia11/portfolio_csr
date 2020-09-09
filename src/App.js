import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Main from "./main";
import MenuTab from "./components/menu/menuTab";
import { theme } from "./common/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
      <MenuTab />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family:  -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: ${theme.color.background};
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
`;

export default App;
