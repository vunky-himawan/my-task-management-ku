import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerLoading = styled.svg<{ color?: string }>`
  animation: ${spin} 1s linear infinite;
  color: ${({ theme, color }) => color || theme.colors.primary};
  flex-shrink: 0;
`;
