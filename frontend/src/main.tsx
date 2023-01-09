import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
