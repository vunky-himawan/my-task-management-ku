// Example usage of styled-components with theme

import styled from "styled-components";

// Basic usage
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.default};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

// With variants
export const Card = styled.div<{ variant?: "surface" | "primary" }>`
  background-color: ${({ theme, variant = "surface" }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.surface};
  color: ${({ theme, variant = "surface" }) =>
    variant === "primary" ? theme.colors.onPrimary : theme.colors.onSurface};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

// Typography
export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.onSurface};
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.base};
  color: ${({ theme }) => theme.colors.onSurface};
`;
