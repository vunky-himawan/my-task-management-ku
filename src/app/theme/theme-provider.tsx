import { type ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themeTokens } from "./tokens";
import { GlobalStyles } from "./global-styles";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledThemeProvider theme={themeTokens}>
      <GlobalStyles theme={themeTokens} />
      {children}
    </StyledThemeProvider>
  );
};
