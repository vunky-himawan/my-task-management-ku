import type React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing.md};
`;

type CardProps = React.PropsWithChildren & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, ...props }: CardProps) => {
  return <CardStyle {...props}>{children}</CardStyle>;
};
