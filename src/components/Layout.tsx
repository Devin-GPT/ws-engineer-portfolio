import * as React from "react";
import { PropsWithChildren } from "react";

import { Container, Theme, ThemeProvider, createTheme } from "@mui/material";

import useThemeToggle from "../hooks/useDarkMode";

import "../styles/App.css";
import MenuBar from "./AppBar";

const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6200EE",
    },
    secondary: {
      main: "#03DAC6",
    },
  },
});

interface LayoutProps extends PropsWithChildren {}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useThemeToggle();
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <MenuBar />
      <Container className="app">{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
