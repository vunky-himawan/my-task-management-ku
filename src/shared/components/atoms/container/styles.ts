import { styled } from "styled-components";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

const sizeMap: Record<ContainerSize, string> = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  full: "100%",
};

export const ContainerStyle = styled.div<{ $size: ContainerSize }>`
  width: 100%;
  max-width: ${({ $size }) => sizeMap[$size]};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};

  @media (min-width: 640px) {
    max-width: 100%
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const CenteredContainerStyle = styled(ContainerStyle)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
