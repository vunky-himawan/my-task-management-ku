import type { ThemeTokens } from "@/app/theme/tokens";
import { styled } from "styled-components";

type BUTTON_VARIANTS = ["primary", "secondary", "danger", "ghost", "link", "outline"];
export type ButtonVariant = BUTTON_VARIANTS[number];

const getButtonTypeStyles = (variant: ButtonVariant, theme: ThemeTokens) => {
  switch (variant) {
    case "primary":
      return `
        background-color: ${theme.colors.primary};
        color: ${theme.colors.onPrimary};
      `;
    case "secondary":
      return `
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.onSecondary};
      `;
    case "danger":
      return `
        background-color: ${theme.colors.error};
        color: ${theme.colors.onError};
      `;
    case "ghost":
      return `
        background-color: transparent;
        color: ${theme.colors.primary};
      `;
    case "link":
      return `
        background-color: transparent;
        color: ${theme.colors.primary};
        text-decoration: underline;
        padding: 0;
      `;
    case "outline":
      return `
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};
      `;
    default:
      return "";
  }
};

export const BaseButtonStyle = styled.button<{ variant?: ButtonVariant }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.default};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};

  ${({ variant, theme }) => variant && getButtonTypeStyles(variant, theme)}

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: not-allowed;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
