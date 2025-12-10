import { styled, type DefaultTheme } from "styled-components";

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

const getFontSize = (level: TitleLevel, theme: DefaultTheme) => {
  const fontSizeMap = {
    1: theme.typography.fontSize["4xl"],
    2: theme.typography.fontSize["3xl"],
    3: theme.typography.fontSize["2xl"],
    4: theme.typography.fontSize.xl,
    5: theme.typography.fontSize.lg,
    6: theme.typography.fontSize.base,
  };
  return fontSizeMap[level];
};

export const TitleStyle = styled.h1<{ $level: TitleLevel }>`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme, $level }) => getFontSize($level, theme)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.black};
`;
