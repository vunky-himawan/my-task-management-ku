import { type ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themeTokens } from "./tokens";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <StyledThemeProvider theme={themeTokens}>{children}</StyledThemeProvider>;
};
