// GlobalStyles.ts
import { createGlobalStyle } from "styled-components";
import type { ThemeTokens } from "./tokens";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeTokens }>`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%; 
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.base};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.onSurface};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.snug};
    color: ${({ theme }) => theme.colors.black};
  }
`;
